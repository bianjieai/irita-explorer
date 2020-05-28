const express = require('express');
const router = express.Router();
const nftMode = require('../schema/nft');

router.get('/',(req,res,next) => {
	nftMode.aggregate([{"$group":{_id:{name:'$name'}}}]).then(result => {
		let denomArr = [];
		result.forEach(item => {
			denomArr.unshift(item['_id'].name)
		});
		res.send(denomArr)
	}).catch(err => {
		res.send(err)
	})
	
})
module.exports = router;
