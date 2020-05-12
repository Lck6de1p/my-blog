
module.exports = {
    publicPath: './',
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@/assets/css/main.scss";`
        }
      }
    }
  }