module.exports={
  configureWebpack: {
    externals: {
      'AMap': 'AMap' // 高德地图配置
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://webapi.amap.com/maps/cookie',
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
