const config = require('../config/index');
const request = require('request');
const validatorListModel = require('../schema/validator')
const schedule = require('node-schedule');
const mongoUrl = require('../config/index')
let lcdValidatorListUrl = `${config.lcdAddress}/validatorsets/latest`;
schedule.scheduleJob(mongoUrl.syncServiceTime,() => {
	request(lcdValidatorListUrl,(error,response,body) => {
		if(error) {
			throw error
		}else {
			if(response){
				validatorListModel.find({}).then(result => {
					if(result.length < 1){
						console.log('验证人集合插入中...........')
						let data = JSON.parse(body)
						validatorListModel.create(data)
					}else {
						console.log('验证人集合更新中...........')
						validatorListModel.updateOne(JSON.parse(body))
					}
				})
			}
		}
	})
})
