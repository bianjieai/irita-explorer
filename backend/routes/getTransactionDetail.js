const express = require('express');
const router = express.Router();
const txDocument = require('../schema/tx');
router.get('/',(req,res,next) => {
	let Data = null;
	txDocument.find({tx_hash:req.query.txhash}).then(result => {
		Data = {
			txHash: result[0].tx_hash,
			block_height: result[0].height,
			status : result[0].status === 1 ? 'success' : 'fail',
			timestamp : new Date(result[0].time).toISOString(),
			signer : result[0].signer,
			memo : result[0].memo,
			msgs : result[0].msgs,
		}
		res.send(Data)
	}).catch(err => {
		res.send(JSON.stringify(err))
	})
	
	/*MongoClient.connect(mongoUrl.mongoUrl,{ useUnifiedTopology: true,useNewUrlParser : true },(err,db) => {
		if(err) throw err;
		let iritaExplorerDb = db.db('irita-explorer');
		let Data = null;
		let sqFind = {
			tx_hash:req.query.txhash
		}
		iritaExplorerDb.collection('sync_tx').find(sqFind).toArray((err,result) => {
			if(err) throw err;
			if(result && result.length > 0){
				Data = {
					txHash: result[0].tx_hash,
					block_height: result[0].height,
					status : result[0].status === 1 ? 'success' : 'fail',
					timestamp : result[0].time,
					signer : result[0].signer,
					memo : result[0].memo,
					msgs : result[0].msgs,
				}
			}else {
				result = null;
			}
			res.send(Data);
			db.close();
		})
	})*/
	
})

module.exports = router;

