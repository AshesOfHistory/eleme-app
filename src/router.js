import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index';
import Register from './views/Register';
import About from './views/about/About'
import News from './views/news/News';
import NewsDetail from './views/news/components/detail'
import NotFound from './views/404';
import Contact from './views/Contact';
import Downloads from './views/downloads/Downloads'
import DownloadsDetail from './views/downloads/components/detail'
import Solution from './views/solution/Solution'
import SpaceSaver from './views/solution/components/SpaceSaver'
import editor from './views/editor'


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
      component: About,
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      children:[
        {
          path: 'detail',
          name: 'NewsDetail',
          component: NewsDetail
        }
      ]
    },
    {
      path: '/editor',
      name:'editor',
      component: editor
    },
    {
      path: '/Solution',
      name: 'Solution',
      component: Solution,
      children:[
        {
          path: 'SpaceSaver',
          name: 'SpaceSaver',
          component: SpaceSaver
        }
      ]
    },

    {
      path: '/Downloads',
      name: 'Downloads',
      component: Downloads,
    },
    {
      path: '/DownloadsDetail',
      name: 'DownloadsDetail',
      component: DownloadsDetail
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
