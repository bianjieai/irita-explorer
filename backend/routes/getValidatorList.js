const express = require('express');
const router = express.Router();
const validatorModel = require('../schema/validator');



router.get('/',(req,res,next) => {
	// status=${req.query.status}&page=${req.query.page}&limit=${req.query.size}
	let sqFind = {}
	if(req.query.status === 'bound'){
		sqFind.status = 2
	}else if(req.query.status === 'unbonding'){
		sqFind.status = 1
	}else if(req.query.status === 'unbonded') {
		sqFind.status = 0
	}
	validatorModel.find(sqFind).skip((Number(req.query.page) - 1)*Number(req.query.size)).limit(Number(req.query.size)).then(result => {
		res.send(result)
	}).catch(err => {
		res.send(err)
	})
});

module.exports = router;
