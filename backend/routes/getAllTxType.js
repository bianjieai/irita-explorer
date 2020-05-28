const express = require('express');
const router = express.Router();
const txDocument = require('../schema/tx');



router.get('/',(req,res,next) => {
	txDocument.aggregate([{"$group":{_id:{type:'$type'}}}]).then(result => {
		let txTypeArr = [];
		result.forEach(item => {
			txTypeArr.unshift(item['_id'].type)
		});
		res.send(txTypeArr)
	}).catch(err => {
		res.send(err)
	})
	/*MongoClient.connect(mongoUrl.mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true}, (err, db) => {
		if (err) throw err;
		let iritaExplorerDb = db.db('irita-explorer');
		let Data = [],txTypeArr = [];
		iritaExplorerDb.collection('sync_tx').find().toArray((err, result) => {
			if (err) throw err;
			if (result) {
				result.forEach(item => {
					txTypeArr.unshift(item.type)
				});
				Data = [...new Set(txTypeArr)]
			}
			res.send(Data);
			db.close();
		})
	})*/
})
module.exports = router;
