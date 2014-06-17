
var Account = require('../models/account.js');
var bitcore = require('bitcore');
var rpcConfig = require('../config/rpc.js');

var RpcClient = bitcore.RpcClient;
var rpc = new RpcClient(rpcConfig);

exports.account = function(req, res, next){
	rpc.getnewaddress(function(err, ret) {
	  if (err) {
		res.json({success : "false", error: err});
	  } else {
		Account({paymentAddress : ret.result, refundAddress : "placeholder"}).save(function (err, tempAccount) {
		  if (err){
			  res.json({success : "false", error: err});
		  }else{
			  res.json({success : "true", address: tempAccount.paymentAddress});
		  }
		});;		
	  }
	});
};

exports.balance = function(req, res, next){
	rpc.getReceivedByAddress(req.params.address, 0, function(err, ret) {
	  if (err) {
		res.json({success : "false", error: err});
	  }else{
	    res.json({success : "true", balance: ret.result});
	  }
	});
  
};