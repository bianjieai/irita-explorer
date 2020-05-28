const express = require('express');
const router = express.Router();
const txDocument = require('../schema/tx');


router.get('/',(req,res,next) => {
	let Data = [];
	txDocument.find().sort({time:-1}).limit(10).then(result => {
		Data = result.map(item => {
			return {
				hash: item.tx_hash,
				timestamp: new Date(item.time).toISOString(),
				txType:item.type
			}
			
		});
		res.send(Data)
	}).catch(err => {
		res.send(err)
	})
	/*MongoClient.connect(mongoUrl.mongoUrl,{ useUnifiedTopology: true,useNewUrlParser : true },(err,db) => {
		if(err) throw err;
		let iritaExplorerDb = db.db('irita-explorer');
		let Data = [];
		iritaExplorerDb.collection('sync_tx').find({}).sort({time:-1}).limit(10).toArray( (err,result) => {
			if(err) throw err;
			if(result){
				Data = result
				Data = result.map(item => {
					return {
						hash: item.tx_hash,
						timestamp: item.time,
						txType:item.type
					}
					
				});
			}else {
				result = null;
			}
			res.send(Data);
			db.close();
		})
	})*/
})


module.exports = router;
