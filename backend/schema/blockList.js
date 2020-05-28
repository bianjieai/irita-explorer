const mongoose = require('mongoose')

const blockList = new mongoose.Schema({
	height: Number,
	hash: String,
	txn: Number,
	time: String,
	"txn-revno": Number,
	"txn-queue": Array
})

let blockListModel = mongoose.model('sync_block',blockList,'sync_block')

module.exports = blockListModel
