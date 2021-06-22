##CSRB explooer

## development
step1 安装依赖
```
 	make setup
```
step2 设置代理  详细参考 “## proxy”
step3 run 
```
	make run
```

## production mode
step1 产品化配置
```
添加产品化配置到 ./productionConfig文件夹  详见:http://wiki.bianjie.ai/pages/viewpage.action?pageId=38928894
```

step2 build
```
npx cross-env VUE_APP_COSMOS_XP_ADDRESS=... && make setup_and_build
```
step3 导出dist静态文件夹到指定服务
step4 设置代理  详细参考 “## proxy”
## proxy
```
proxy: {
          '/api':{
              target:'http://10.1.4.248:4003',
              secure:false,
              pathRewrite:{'^/api': '/'}
          },
          '/lcd':{
                target:'http://10.2.10.130:2317',
              secure:false,
              pathRewrite:{'^/lcd': '/'}
          }
        }
```

##环境变量

|  name   | example  |  note  |
|  ----  | ----  |   ----  | 
| VUE_APP_COSMOS_XP_ADDRESS  | https://qa.cosmosplorer.bianjie.ai |  cosmos单链浏览器地址 |
| ...  | ... |  ... |
