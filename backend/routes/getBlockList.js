const express = require('express');
const router = express.Router();
const blockDocument = require('../schema/blockList');


router.get('/',(req,res,next) => {
	let data = {};
	let getCountPromise  = new Promise((resolve, reject) => {
		blockDocument.count().then(res =>{
			resolve(res)
		}).catch(err => {
			reject(err)
			console.log(err)
		})
	})
	getCountPromise.then(count => {
		if(count) {
			blockDocument.find({}).skip((Number(req.query.page) - 1)*Number(req.query.size)).sort({height: -1}).limit(Number(req.query.size)).then(result => {
				data.data = result.map(item => {
								return {
									height: item.height,
									timestamp: new Date(item.time).toISOString(),
									numTxs: item.txn
								}
							});
				data.count = count
				res.send(data)
			}).catch(error => {
				throw error
			})
		}
	}).catch(error => {
		res.send({
			msg:'data not found'
		})
	})
	
	
	// res.send(data,"数据zhansihi")
	
	// MongoClient.connect(mongoUrl.mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true}, (err, db) => {
	// 	if (err) throw err;
	// 	let iritaExplorerDb = db.db('irita-explorer');
	// 	let Data = [],countNumber;
	// 	iritaExplorerDb.collection('sync_block').find().count((err,result) => {
	// 		if (err) throw err;
	// 		if(result) {
	// 			countNumber = result
	// 		}
	// 	});
	// 	iritaExplorerDb.collection('sync_block').find().skip((Number(req.query.page) - 1)*Number(req.query.size)).sort({height: -1}).limit(Number(req.query.size)).toArray((err, result) => {
	// 		if (err) throw err;
	// 		if (result) {
	// 			Data = result.map(item => {
	// 				return {
	// 					height: item.height,
	// 					timestamp: item.time,
	// 					numTxs: item.txn
	// 				}
	// 			});
	// 		} else {
	// 			result = null;
	// 		}
	// 		res.send({
	// 			count: countNumber,
	// 			data: Data
	// 		});
	// 		db.close();
	// 	})
	// })
})
module.exports = router;
