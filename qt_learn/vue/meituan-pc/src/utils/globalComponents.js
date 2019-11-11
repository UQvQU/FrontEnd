import MyHeader from '@/components/header/myheader'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.component('glMyHeader', MyHeader)
}

export default plugin
