import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index';
import Register from './views/Register';
import About from './views/about/About'
import News from './views/News';
import NotFound from './views/404';
import Contact from './views/Contact'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
});
