const mongoose = require('mongoose')


const validatorList = new mongoose.Schema({
	height: String,
	result: Array
})

let validatorListModel = mongoose.model('validator_list',validatorList,'validator_list')
module.exports = validatorListModel
