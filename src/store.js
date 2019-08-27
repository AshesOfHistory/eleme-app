import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectMenuIndex: 'index',
    routerList:[
      {routerName:'index',indexPath:'/index',value:'Home',isActive:false,children:[],},
      {routerName:'About',indexPath:'/About',value:'About',isActive:false,children:[]},
      {routerName:'News',indexPath:'/News',value:'News',isActive:false,children:[]},
      {routerName:'Products',indexPath:'/Products',value:'Products',isActive:false,children:[
          // {routerName:'LumitekLighting',indexPath:'/Products/LumitekLighting',value:'Lumitek Lighting',isActive:false,children:[]},
          {routerName:'Lumitek?type_id_1=3',indexPath:'/Products/Lumitek',value:'Lumitek',isActive:false,children:[]},
          {routerName:'AnKuoo?type_id_1=4',indexPath:'/Products/AnKuoo',value:'AnKuoo',isActive:false,children:[]},
        ]
      },
      {routerName:'Solution',indexPath:'/Solution',value:'Solution',isActive:false,children:[
          {routerName:'SpaceSaver?type_id=10',indexPath:'/Solution/SpaceSaver',value:'Space Saver',isActive:false,children:[],id:''},
          {routerName:'EnergySaver?type_id=11',indexPath:'/Solution/EnergySaver',value:'Energy Saver',isActive:false,children:[]},
          {routerName:'SuperFlat?type_id=37',indexPath:'/Solution/SuperFlat',value:'Super Flat',isActive:false,children:[]},
          {routerName:'Desktop?type_id=38',indexPath:'/Solution/Desktop',value:'Desktop',isActive:false,children:[]},
          {routerName:'Living&Accessories?type_id=177',indexPath:'/Solution/Living&Accessories',value:'Living & Accessories',isActive:false,children:[]},
          {routerName:'Comfort?type_id=178',indexPath:'/Solution/Comfort',value:'Comfort',isActive:false,children:[]},
          {routerName:'One-The-Go?type_id=179',indexPath:'/Solution/One-The-Go',value:'One-The-Go',isActive:false,children:[]},
          {routerName:'Work?type_id=180',indexPath:'/Solution/routerName',value:'Work',isActive:false,children:[]},
          {routerName:'USBCharger?type_id=201',indexPath:'/Solution/USBCharger',value:'USB Charger',isActive:false,children:[]},
        ]
      },
      {routerName:'Downloads',indexPath:'/Downloads',value:'Downloads',isActive:false,children:[]},
      {routerName:'Contact',indexPath:'/Contact',value:'Contact Us',isActive:false,children:[]},
    ],
    currentFullPath:'index',
    type_id: '',
    product_id: '',
    activeAsidePath: '',
    product: {}
  },
  mutations: {
    addChildRouterProductInfo(state,info){//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);

    },
    setFullPath(state, path, type_id, product_id){
      state.currentFullPath = path ? path : '';
      state.type_id = type_id ? type_id : '';
      state.product_id = product_id ? product_id : ''
    },
    setActiveAsidePath(state,activeAsidePath){
      state.activeAsidePath = activeAsidePath
    },
    setProduct(state,product){
      state.product = product
    }
  },
  actions: {

  },
  getters:{
    getRouterList(state){
      return state.routerList
    },
    getFullPath(state){
      return {currentFullPath: state.currentFullPath,type_id: state.type_id,product_id: state.product_id}
    },
    getActiveAsidePath(state){
      return state.activeAsidePath
    },
    getProduct(state){
      return state.product
    }
  }
});
