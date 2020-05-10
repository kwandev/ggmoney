// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_/_variables.scss";
          @import "@/assets/scss/_/_mixins.scss";
        `
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
  // productionSourceMap: false
}
