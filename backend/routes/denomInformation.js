
const express = require('express');
const router = express.Router();
const nftMode = require('../schema/nft');

router.get('/',(req,res,next) => {
	let  sqFind  = {};
	if(req.query.denom === '' && req.query.owner === '' ){
	
	}else {
		sqFind['$and'] = [];
		if(req.query.denom){
			sqFind['$and'].push({
				name: req.query.denom
			})
		}
		if(req.query.owner){
			sqFind['$and'].push({
				owner: req.query.owner
			})
		}
	}
	let getNftCountPromist = new Promise((resolve, reject) => {
		nftMode.count(sqFind).then(count => {
			if(count){
				resolve(count)
			}else {
				reject('no nft')
			}
		})
		
	})
	getNftCountPromist.then(count => {
		nftMode.find(sqFind).skip((Number(req.query.page) - 1)*Number(req.query.size)).limit(Number(req.query.size)).then(result => {
			let Data = []
			result.forEach( item => {
				console.log(item)
				Data.unshift({
					denom:item.name,
					owner: item.creator,
					tokenUri: item.JSONSchema
				})
			}) ;
			res.send({
				count: count,
				data: Data
			});
		}).catch(err => {
			res.send(err)
		})
	}).catch(error => {
		res.send(error)
	})

	// let nftListUrl = `${config.lcdAddress}/nft/denoms`
	// request(nftListUrl,(error,response,body) => {
	// 	if(error){
	// 		throw error
	// 	}else {
	// 		if(body){
	// 			console.log(body)
	// 			let resData = JSON.parse(body);
	// 			if(resData.result){
	// 				res.send(resData.result)
	// 			}
	// 		}
	// 	}
	// })
})



module.exports = router;











/*
var express = require('express');
var router = express.Router();
var mongoUrl = require('../config/index')
var MongoClient = require('mongodb').MongoClient;

router.get('/',(req,res,next) => {
	MongoClient.connect(mongoUrl.mongoUrl,{ useUnifiedTopology: true,useNewUrlParser : true },(err,db) => {
		if(err) throw err;
		let iritaExplorerDb = db.db('irita-explorer');
		let Data = [],countNumber,sqFind = {} ;
		if(req.query.denom === '' && req.query.owner === '' && req.query.tokenId === ''){

		}else {
			sqFind['$and'] = [];
			if(req.query.denom){
				sqFind['$and'].push({
					denom: req.query.denom
				})
			}
			if(req.query.owner){
				sqFind['$and'].push({
					owner: req.query.owner
				})
			}
			if(req.query.tokenId){
				sqFind['$and'].push({
					tokenId: req.query.tokenId
				})
			}
		}
		iritaExplorerDb.collection('asset_list').find(sqFind).count((err,result) => {
			if(err) throw err;
			if(result){
				countNumber = result;
			}
		iritaExplorerDb.collection('asset_list').find(sqFind).skip((Number(req.query.page) - 1)*Number(req.query.size)).limit(Number(req.query.size)).toArray((err, result) => {
			if (err) throw err;
			if(result){
				result.forEach( item => {
					Data.unshift({
						denom:item.denom,
						owner: item.owner,
						tokenId: item.tokenId,
						tokenUri: item.tokenUri
					})
				}) ;
				res.send({
					count: countNumber,
					data: Data
				});
				db.close();
				}
			})
		})
	})
});

module.exports = router;*/
