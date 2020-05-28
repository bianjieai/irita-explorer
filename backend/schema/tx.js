const mongoose = require('mongoose')


const txList = new mongoose.Schema({
	height: Number,
	tx_hash: String,
	memo: String,
	time: Date,
	type: String,
	from: String,
	To: String,
	status:Number,
	coins:{
		denom:String,
		amount:String
	},
	events:Array,
	msgs:Array,
	signers:Array,
	signer:String,
	"txn-revno": Number,
	"txn-queue": Array
})
let txListModel = mongoose.model('sync_tx',txList,'sync_tx')
module.exports = txListModel
