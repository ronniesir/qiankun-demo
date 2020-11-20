module.exports = {
  transpileDependencies: ['single-spa','qiankun','import-html-entry'],
  devServer: {
    port:8080,
    proxy: {
      '/radar': {
        target: 'http://za-castle-radar.test.za.biz',
        changeOrigin: true,
        secure: false
      }
    }
  },
};
