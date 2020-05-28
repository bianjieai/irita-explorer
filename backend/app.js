var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// require("./routes/syncServiceList");
require("./routes/getAssetCount")
require("./routes/syncVadidator")
require('./routes/db')
// var blockList = require('./routes/getBlockList');
// var blocksRouter = require('./routes/getBlocks');
var validatorList = require('./routes/getValidatorList');
var blocksRouter = require('./routes/getBlocks');
var blockTxListRouter = require('./routes/getTxListByHeight');
var blockInformationRouter = require('./routes/getBlockInformation');
var transactionRouter = require('./routes/getTransaction');
// var navigationRouter = require('./routes/home');
var denomInformation = require('./routes/denomInformation');
var nftOwnerInformation = require('./routes/nftOwnerInformation');
// var getTokenUri = require('./routes/getTokenUrI');
var blockList = require('./routes/getBlockList');
var txListRouter = require('./routes/getTxList');
var allTxType = require('./routes/getAllTxType');
var nftListRouter = require('./routes/nftList');
var addressTxListRouter = require('./routes/getTxByAddress');
// var tokenTxListRouter = require('./routes/getTxListByTokenID');
var serviceInformationRouter = require('./routes/getServiceInformation');
var serviceBindingRouter = require('./routes/getServiceBindings');
var transactionInformation = require('./routes/getTransactionDetail');
var serviceListRouter = require('./routes/getServiceList');
// var serviceTranaactionByServiceNameRouter = require('./routes/getTransactionByServiceNameAndChainId');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/blocks', blockList);
// app.use('/api/block', blocksRouter);
app.use('/api/blocks/recent', blocksRouter);
app.use('/api/blockInformation', blockInformationRouter);
app.use('/api/txs/recent', transactionRouter);
// app.use('/api/home/navigation', navigationRouter);
app.use('/api/nft/owner', nftOwnerInformation);
// app.use('/api/nft/collection', getTokenUri);
app.use('/api/blocks', blockList);
app.use('/api/block', blockList);
app.use('/api/txs', txListRouter);
app.use('/api/allTxType', allTxType);
app.use('/api/nft/denoms', nftListRouter);
app.use('/api/nft/denom', denomInformation);
app.use('/api/address/txs', addressTxListRouter);
// app.use('/api/token/txs', tokenTxListRouter);
app.use('/api/service', serviceInformationRouter);
app.use('/api/service/binding', serviceBindingRouter);
app.use('/api/tx', transactionInformation);
app.use('/api/services', serviceListRouter);
app.use('/api/service/transaction', serviceTranaactionByServiceNameRouter);
app.use('/api/blockTxList', blockTxListRouter);
app.use('/api/validatorList', validatorList);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function (err,req,res,next) {
  res.setTimeout(5 * 1000,function () {
    console.log('Request has time out')
    res.status(408).send('请求超时')
  })
})
module.exports = app;
