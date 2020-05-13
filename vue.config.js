
module.exports = {
	publicPath: './',
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/assets/css/main.scss";`
			}
		}
	}
}c