module.exports = {
	devServer: {
		proxy: {
			'/api':{
                target:'http://192.168.150.32:2317',
				secure:false,
				pathRewrite: {
			     '^/api': ''
			    }
			}
		},
		disableHostCheck: true
	},
	lintOnSave:false,
}
