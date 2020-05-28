const dbConfig = require('../config/config.json')

const mongoose = require('mongoose')

function dbConnect() {
	mongoose.connect(`${dbConfig.app.mongoUrl}`, {useUnifiedTopology: true, useNewUrlParser: true }).then( () => {
		console.log('db connected!')
	}).catch(err => {
		console.log(`db Connection error: ${err.message}`)
		dbConnect()
	}) //浏览器数据库
}
dbConnect();

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function () {
	console.log('success')
})
db.on('disconnected',function () {
	console.log('disconnected')
	dbConnect()
})



