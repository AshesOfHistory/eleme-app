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
import Products from './views/products/Products'
import SolutionDetail from './views/solution/components/detail'
import ProductsDetail from './views/products/components/detail'
import editor from './views/editor'
import productDetail from './views/products/components/productDetail'


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
      path: '/Products',
      name: 'Products',
      component: Products,
      children:[
        {
          path: 'LumitekLighting',
          name: 'LumitekLighting',
          component: ProductsDetail
        },
        {
          path: 'Lumitek',
          name: 'Lumitek',
          component: ProductsDetail
        },
        {
          path: 'AnKuoo',
          name: 'AnKuoo',
          component: ProductsDetail
        },
      ]
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/Solution',
      name: 'Solution',
      component: Solution,
      children:[
        {
          path: ':solutionName',
          name: 'solutionName',
          component: SolutionDetail
        },
        // {
        //   path: 'EnergySaver',
        //   name: 'EnergySaver',
        //   component: SolutionDetail
        // },
        // {
        //   path: 'SuperFlat',
        //   name: 'SuperFlat',
        //   component: SolutionDetail
        // },
        // {
        //   path: 'Desktop',
        //   name: 'Desktop',
        //   component: SolutionDetail
        // },
        // {
        //   path: 'Living&Accessories',
        //   name: 'Living&Accessories',
        //   component: SolutionDetail
        // },
        // {
        //   path: 'Comfort',
        //   name: 'Comfort',
        //   component: SolutionDetail
        // },
        // {
        //   path: 'One-The-Go',
        //   name: 'One-The-Go',
        //   component: SolutionDetail
        // },
        // {
        //   path: 'Work',
        //   name: 'Work',
        //   component: SolutionDetail
        // },
        // {
        //   path: 'USBCharger',
        //   name: 'USBCharger',
        //   component: SolutionDetail
        // },
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
