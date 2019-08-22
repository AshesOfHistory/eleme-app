<template>
  <div class="editor">
    <el-button size="mini" style="margin-bottom: 10px;" @click="save($event,tinymceHtml)">复制</el-button>
    <editor id="tinymce" v-model="tinymceHtml" :init='init'></editor>
    <!--@/assets/news/detailImgs/1-1.jpg-->
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

  import clipboard from '@/utils/clipboard'
  export default {
    model: {},
    props: {},
    components: {Editor},
    mixins: [],
    created() {


    },
    mounted() {
      tinymce.init({
        images_upload_handler: (blobInfo, success, failure) => {
          console.log(blobInfo)
          success()
          // const img = "data:image/jpeg;base64," + blobInfo.base64();
          // success(img);
        }
      })
    },
    data() {
      return {
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
        }
      };
    },
    methods: {
      save(event,html){
        console.log(this.tinymceHtml)
        clipboard(event, html)
      }
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

