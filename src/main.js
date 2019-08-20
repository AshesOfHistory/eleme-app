import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './css/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import './css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import PageAddress from './components/PageAddress'
import GAside from './components/GAside'
import PageAddressRight from './components/PageAddressRight'
Vue.component('PageAddress',PageAddress);
Vue.component('GAside',GAside);
Vue.component('PageAddressRight',PageAddressRight);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
