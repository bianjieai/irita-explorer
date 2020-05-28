const express = require('express');
const router = express.Router();
const blockDocument = require('../schema/blockList');

router.get('/',(req,res,next) => {
	let Data = []
	blockDocument.find({height:Number(req.query.height)}).then(result => {
		Data = result.map(item => {
			return {
				height: item.height,
				block_hash: item.hash,
				timestamp: new Date(item.time).toISOString(),
				numTxs:item.txn
			}
		})
		res.send(Data)
	}).catch(err => {
		res.send(JSON.stringify(err))
	})
	/*MongoClient.connect(mongoUrl.mongoUrl,{ useUnifiedTopology: true,useNewUrlParser : true },(err,db) => {
		if(err) throw err;
		let iritaExplorerDb = db.db('irita-explorer');
		let Data = [];
		iritaExplorerDb.collection('sync_block').find({'height':Number(req.query.height)}).toArray( (err,result) => {
			if(err) throw err;
			if(result){
				Data = result.map(item => {
					return {
						height: item.height,
						block_hash: item.hash,
						timestamp: item.time,
						numTxs:item.txn
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
