const mongoose = require('mongoose')
const nftList = new mongoose.Schema({
	name: String,
	creator: String,
	JSONSchema: String
})
let nftListModel = mongoose.model('sync_list',nftList,'sync_nft')

module.exports = nftListModel
