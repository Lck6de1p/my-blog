
module.exports = {
	publicPath: './',
	productionSourceMap: false, // 打包后隐藏源码
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/assets/css/main.scss";`
			}
		}
	}
}