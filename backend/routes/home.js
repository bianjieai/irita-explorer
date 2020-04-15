var express = require('express');
var router = express.Router();
var config = require('../config/index');
var request = require('request');
var mongoUrl = require('../config/index')
var MongoClient = require('mongodb').MongoClient;
router.get('/',(req,res,next) => {
	let lcdBlockLatestHeightURL = `${config.lcdAddress}/blocks/latest`;
	let lcdBlockHeightUrl = `${config.lcdAddress}/blocks/`;
	request(lcdBlockLatestHeightURL,(error,response,body) => {
		var responseData = {
				block_height: null,
				block_time: null,
				totals_txs: 0,
				address_number: 0,
				server_number: 0,
				validator_number:0,
				asset_number: 0,
				diffBlockTime:0
		    };
		if(error){
			throw error
		}else {
			if(body && !JSON.parse(body).error){
				let resData = JSON.parse(body);
				let differenceBlock = 100;
				if(resData.block){
					responseData.block_height = resData.block.header.height;
					responseData.block_time = resData.block.header.time;
					let diffBlockUrl = `${lcdBlockHeightUrl}${Number(responseData.block_height) - differenceBlock}`;
					let getValidatorNumberUrl = `${config.lcdAddress}/validatorsets/latest`;
					request(diffBlockUrl,(error,response,body) => {
						if(error){
							throw error
						}else {
							if(body){
								let diffResponseData = JSON.parse(body);
								if(diffResponseData.block){
									responseData.diffBlockTime = diffResponseData.block.header.time
								}
							}
							request(getValidatorNumberUrl,(error,response,body) => {
								if(error){
									throw error
								}else {
									if(body){
										let resultData = JSON.parse(body);
										if(resultData.result.validators){
											responseData.validator_number = resultData.result.validators.length
										}
									}
								}
								MongoClient.connect(mongoUrl.mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true}, (err, db) => {
									let iritaExplorerDb = db.db('irita-explorer');
									iritaExplorerDb.collection('sync_tx').find({}).count((err,result) => {
										if (err) throw err;
										if (result) {
											responseData.totals_txs = result;
										}
									});
									iritaExplorerDb.collection('service_tx').find().count((err,result) => {
										if (err) throw err;
										if(result) {
											responseData.server_number = result
										}
									});
									iritaExplorerDb.collection('asset_list').find({}).count((err,result) => {
										if(err) throw err;
										if(result){
											responseData.asset_number = result;
										}
										res.send(responseData)
									});
								});
							})
						}
					})
				}
			}
		}
	})
});


module.exports = router;
