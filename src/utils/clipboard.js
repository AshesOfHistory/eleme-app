import Vue from 'vue'
import Clipboard from 'clipboard'

export default function handleClipboard(event, text) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success',()=>{
    Vue.prototype.$message({
      message: '复制成功!',
      type: 'success',
      duration: 1500
    })
    clipboard.off('success')
    clipboard.off('error')
    clipboard.destroy()
  })
  clipboard.on('error',()=>{
    Vue.prototype.$message({
      message: '复制失败!',
      type: 'error'
    })
    clipboard.off('success')
    clipboard.off('error')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
