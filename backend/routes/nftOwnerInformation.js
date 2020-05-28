const express = require('express');
const router = express.Router();
const nftMode = require('../schema/nft');

router.get('/',(req,res,next) => {
	// let getOwnerAddressUrl = `${config.lcdAddress}/nft/nfts/owner/${req.query.owner}`;
	nftMode.find({creator:req.query.owner}).then(result => {
		let resArray = result.map( item  => {
			return {
				name: item.name,
				JSONSchema: item.JSONSchema,
				creator: item.creator
			}
		})
		res.send(resArray)
	}).catch(error => {
		res.send(error)
	})
	/*request(getOwnerAddressUrl,(error,response,body) => {
		if(error){
			throw error
		}else {
			if(body){
				let resultData = JSON.parse(body);
				if(resultData.result && resultData.result.value){
					res.send(resultData.result.value)
				}
			}
		}
	})*/
})

module.exports = router;
