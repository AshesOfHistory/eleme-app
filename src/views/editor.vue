<template>
  <div class="editor">
    <el-button size="mini" style="margin-bottom: 10px;" @click="save($event,tinymceHtml)">复制</el-button>
    <editor id="tinymce" v-model="tinymceHtml" :init='init'></editor>

    <el-upload
      class="upload-demo"
      drag
      action="http://upload.qiniup.com"
      accept="image/jpeg,image/gif,image/png,image/bmp"
      :before-upload="beforeImageUpload"
      :data="postData"
      :on-success="handleImageUploadSuccess"
      multiple="false">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <img v-if="imgUrl" :src="imgUrl" alt="">
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import 'tinymce/themes/silver'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/plugins/image'// 插入上传图片插件
  import 'tinymce/plugins/imagetools'
  import 'tinymce/plugins/media'// 插入视频插件
  import 'tinymce/plugins/table'// 插入表格插件
  import 'tinymce/plugins/lists'// 列表插件
  import 'tinymce/plugins/wordcount'// 字数统计插件
  import 'tinymce/plugins/fullscreen'// 全屏
  import 'tinymce/plugins/preview'// 预览

  // import {UploaderBuilder,Uploader} from 'qiniu4js';
  // let uploader = new UploaderBuilder().build();

  import clipboard from '@/utils/clipboard'
  import {genUpToken} from '../utils/qiniuToken';

  export default {
    model: {},
    props: {},
    components: {Editor},
    mixins: [],
    created() {
      let token;
      let policy = {};
      let bucketName = 'lumitek';
      let AK = '15fcfndab6PXTgbR-DI8KZChD7sDRtLE3xA31F9u';
      let SK = 'HndjsL6RiGYQWrvNt9HDQWuHOScBv872X8Hx9oBd';
      let deadline = Math.round(new Date().getTime() / 1000) +3600;
      policy.scopt = bucketName;
      policy.deadline = deadline
      token = genUpToken(AK,SK,policy)
      this.postData.token = token;
      console.log(token)
    },
    mounted() {
      tinymce.init({
        images_upload_handler: (blobInfo, success, failure) => {
          success()
        }
      })
    },
    data() {
      return {
        imgUrl: null,
        postData:{},
        tinymceHtml: '',
        init: {
          language_url: '/tinymce/zh_CN.js',
          language:'zh_CN',
          skin_url: '/tinymce/skins/ui/oxide',
          height:500,
          plugins: 'lists image media table wordcount fullscreen preview imagetools',
          toolbar: 'undo redo |  formatselect | fontsizeselect bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image table | removeformat fullscreen',
          //fontselect
          fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
          browser_spellcheck: true, // 拼写检查
          branding: false, // 去水印
          elementpath: false,  //禁用编辑器底部的状态栏
          statusbar: false, // 隐藏编辑器底部的状态栏
          paste_data_images: true, // 是否允许粘贴图像
          menubar: false, // 是否隐藏最上方menu
          autosave_interval: "20s",

          automatic_uploads: true, // 图片自动上传
          images_upload_url: '/img',
          imageupload_url: '/img',
        }
      };
    },
    methods: {
      save(event,html){
        console.log(this.tinymceHtml)
        clipboard(event, html)
      },
      handleImageUploadSuccess(res, file){
        this.imgUrl = URL.createObjectURL(file.row)
        console.log(this.imgUrl)
      },
      beforeImageUpload(file){
        const isLimited = file.size / 1024 / 1024 < 50;
        if(!isLimited) {
          this.$message({
            showClose: true,
            message: '文件大小不得超过50M',
            type: 'error'
          });
        }
      },
    },
    computed: {},
    watch: {},
    filters: {}
  };
</script>

<style lang="scss" scoped>
  .editor {

  }
</style>

