import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectMenuIndex: 'index',
    routerData:[
      {routerName:'index',indexPath:'/index',value:'Home',isActive:false,children:[]},
      {routerName:'About',indexPath:'/About',value:'About',isActive:false,children:[]},
      {routerName:'News',indexPath:'/News',value:'News',isActive:false,children:[]},
      {routerName:'Products',indexPath:'/Products',value:'Products',isActive:false,children:[
          {routerName:'LumitekLighting',indexPath:'/Products/LumitekLighting',value:'Lumitek Lighting',isActive:false,children:[]},
          {routerName:'Lumitek',indexPath:'/Products/Lumitek',value:'Lumitek',isActive:false,children:[]},
          {routerName:'AnKuoo',indexPath:'/Products/AnKuoo',value:'AnKuoo',isActive:false,children:[]},
        ]
      },
      {routerName:'Solution',indexPath:'/Solution',value:'Solution',isActive:false,children:[
          {routerName:'SpaceSaver',indexPath:'/Solution/SpaceSaver',value:'Space Saver',isActive:false,children:[]},
          {routerName:'EnergySaver',indexPath:'/Solution/EnergySaver',value:'Energy Saver',isActive:false,children:[]},
          {routerName:'SuperFlat',indexPath:'/Solution/SuperFlat',value:'Super Flat',isActive:false,children:[]},
          {routerName:'Desktop',indexPath:'/Solution/Desktop',value:'Desktop',isActive:false,children:[]},
          {routerName:'Living&Accessories',indexPath:'/Solution/Living&Accessories',value:'Living & Accessories',isActive:false,children:[]},
          {routerName:'Comfort',indexPath:'/Solution/Comfort',value:'Comfort',isActive:false,children:[]},
          {routerName:'One-The-Go',indexPath:'/Solution/One-The-Go',value:'One-The-Go',isActive:false,children:[]},
          {routerName:'Work',indexPath:'/Solution/routerName',value:'Work',isActive:false,children:[]},
        ]
      },
      {routerName:'Downloads',indexPath:'/Downloads',value:'Downloads',isActive:false,children:[]},
      {routerName:'Contact',indexPath:'/Contact',value:'Contact Us',isActive:false,children:[]},
    ]
  },
  mutations: {

  },
  actions: {

  },
});
