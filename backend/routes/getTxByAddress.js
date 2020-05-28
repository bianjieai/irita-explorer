const express = require('express');
const router = express.Router();
const txDocument = require('../schema/tx');

router.get('/',(req,res,next) => {
	let Data = [];
		let sqFind = {'$or':[
				{from: req.query.owner},
				{to: req.query.owner},
				{signer: req.query.owner},
			]
		};
		let getTxCountByAddrPromise = new Promise((resolve, reject) => {
			txDocument.find(sqFind).count().then(countResult => {
				resolve(countResult)
			}).catch(err => {
				reject(err)
			})
		})
	getTxCountByAddrPromise.then(count => {
		txDocument.find(sqFind).skip((Number(req.query.page) - 1)*Number(req.query.size)).sort({height: -1}).limit(Number(req.query.size)).then( result => {
			Data = result.map(item => {
				return {
					hash: item.tx_hash,
					height: item.height,
					txType:item.type,
					from: item.from,
					to: item.to,
					signer: item.signer,
					status: item.status === 1 ? 'success' : 'failed',
					timestamp: new Date(item.time).toISOString()
				}

			});
			res.send({
				count: count,
				data: Data
			})
		})
	}).catch(err => {
		res.send(err)
	})
	
	// MongoClient.connect(mongoUrl.mongoUrl,{ useUnifiedTopology: true,useNewUrlParser : true },(err,db) => {
	// 	if(err) throw err;
	// 	let iritaExplorerDb = db.db('irita-explorer');
	// 	let Data = [],countNumber;
	// 	let sqFind = {'$or':[
	// 			{from: req.query.owner},
	// 			{to: req.query.owner},
	// 			{signer: req.query.owner},
	// 		]
	// 	};
	// 	iritaExplorerDb.collection('sync_tx').find(sqFind).count((err,result) => {
	// 		if (err) throw err;
	// 		if(result) {
	// 			countNumber = result
	// 		}
	// 	});
	// 	iritaExplorerDb.collection('sync_tx').find(sqFind).skip((Number(req.query.page) - 1)*Number(req.query.size)).sort({height: -1}).limit(Number(req.query.size)).toArray( (err,result) => {
	// 		if(err) throw err;
	// 		if(result){
	// 			Data = result;
	// 			Data = result.map(item => {
	// 				return {
	// 					hash: item.tx_hash,
	// 					height: item.height,
	// 					txType:item.type,
	// 					from: item.from,
	// 					to: item.to,
	// 					signer: item.signer,
	// 					status: item.status === 1 ? 'success' : 'failed',
	// 					timestamp: item.time
	// 				}
	//
	// 			});
	// 		}else {
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
