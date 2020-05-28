
const config = require('../config/index');
const request = require('request');
const nftListModel = require('../schema/nft')
const schedule = require('node-schedule');
const mongoUrl = require('../config/index')
const nftListUrl = `${config.lcdAddress}/nft/nfts/denoms`;
const getDenomInformationUrl = `${config.lcdAddress}/nft/nfts/collection/`;
// const  scheduleCronstyle = () => {
	console.log('同步更新中')
	// schedule.scheduleJob(mongoUrl.syncServiceTime,() => {
		let getDenomsPromise = new Promise((resolve, reject) => {
			request(nftListUrl,(error,response,body) => {
				if(error){
					reject(error)
				}else {
					if(body ){
						resolve(body)
					}
				}
			})
		})
		getDenomsPromise.then(result => {
			if(JSON.parse(result)){
				JSON.parse(result).result.forEach(item => {
					item.JSONSchema = item.schema
				})
			}
			nftListModel.find({}).then(result => {
				console.log(result,'')
				if(result.length < 1){
					nftListModel.create({
						name: item.name,
						creator: item.creator,
						JSONSchema: item.schema
					})
				}else {
					nftListModel.updateOne({name})
				}
			})
			JSON.parse(result).result.forEach(item => {
			
			})
			// result.forEach( item => {
			// 	request(`${getDenomInformationUrl}${encodeURIComponent(item)}`,(error,response,body) => {
			// 		if(error)throw error;
			// 		if(body){
			// 			let resultData = JSON.parse(body);
			// 			let denomName = item,data = resultData.result[item];
			// 			nftListModel.find({}).then(result => {
			// 				if(result.length < 1) {
			// 					/*for (const detail in data) {
			// 						for (const detailValue in data[detail]) {
			// 							let insertData = Object.assign({denom:denomName},data[detail][detailValue])
			// 							nftListModel.create(insertData)
			// 						}
			// 					}*/
			// 				}else {
			// 					/*for (const detail in data) {
			// 						for (const detailValue in data[detail]) {
			// 							let insertData = Object.assign({denom:denomName},data[detail][detailValue])
			// 							nftListModel.update({denom:denomName},insertData,{upsert: true, new: true, setDefaultsOnInsert: true},(result,error) =>{
			//
			// 							})
			// 						}
			// 					}*/
			// 				}
			// 			})
			//
			//
			//
			//
			//
			// 			/*nftListModel.find({}).then(res => {
			// 				if(err) throw err;
			// 				if(result && result.length > 0){
			// 					for(let tokenID in resultData.result[item].nfts){
			// 						let iritaExplorerDb = db.db('irita-explorer');
			// 						nftListModel.updateOne({
			// 							denom:`${denomName}`,
			// 							tokenId:`${tokenID}`
			// 						},{$set:{
			// 								denom: denomName,
			// 								tokenId: tokenID,
			// 								owner:data.nfts[tokenID].owner,
			// 								tokenUri:data.nfts[tokenID].token_uri
			// 							}
			// 						},{upsert:true})
			// 					}
			// 				}else {
			// 					for(let tokenID in resultData.result[item].nfts){
			// 						nftListModel.save({
			// 							denom: denomName,
			// 							tokenId: tokenID,
			// 							owner: data.nfts[tokenID].owner,
			// 							tokenUri:data.nfts[tokenID].token_uri
			// 						})
			// 					}
			// 				}
			// 			})*/
			// 		}
			// 	})
			// })
		})
	// })
	
	/*MongoClient.connect(mongoUrl.mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true}, (err, db) => {
		let iritaExplorerDb = db.db('irita-explorer');
		iritaExplorerDb.createCollection('asset_list');
	});*/
	/*schedule.scheduleJob(mongoUrl.syncServiceTime,() => {
		console.log("资产数量定时更新中")
		request(nftListUrl,(error,response,body) => {
			if(error){
				throw error
			}else {
				if(body && !JSON.parse(body).error){
					let resultData = JSON.parse(body).result;
					denomArray = resultData;
					resultData.forEach( item => {
						request(`${getDenomInformationUrl}${encodeURIComponent(item)}`,(error,response,body) => {
							if(error)throw error;
							if(body){
								let resultData = JSON.parse(body);
								let denomName = item,data = resultData.result[item];
								MongoClient.connect(mongoUrl.mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true}, (err, db) => {
									let iritaExplorerDb = db.db('irita-explorer');
									iritaExplorerDb.collection('asset_list').find({}).toArray((err,result) => {
										if(err) throw err;
										if(result && result.length > 0){
											for(let tokenID in resultData.result[item].nfts){
												let iritaExplorerDb = db.db('irita-explorer');
												iritaExplorerDb.collection('asset_list').updateOne({
													denom:`${denomName}`,
													tokenId:`${tokenID}`
												},{$set:{
														denom: denomName,
														tokenId: tokenID,
														owner:data.nfts[tokenID].owner,
														tokenUri:data.nfts[tokenID].token_uri
													}
												},{upsert:true})
											}
										}else {
											for(let tokenID in resultData.result[item].nfts){
												let iritaExplorerDb = db.db('irita-explorer');
												iritaExplorerDb.collection('asset_list').insertOne({
													denom: denomName,
													tokenId: tokenID,
													owner: data.nfts[tokenID].owner,
													tokenUri:data.nfts[tokenID].token_uri
												})
											}
										}
									})
								})
							}
						})
					})
				}
			}
		})
	})*/
// }
// scheduleCronstyle();



