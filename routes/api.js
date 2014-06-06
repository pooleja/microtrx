var bitcore = require('bitcore');
var RpcClient = bitcore.RpcClient;

var config = {
  protocol: 'http',
  user: 'rpcuser1',
  pass: 'testpassword',
  host: '192.168.2.6',
  port: '18332',
};

var rpc = new RpcClient(config);

exports.userAccount = function(req, res, next){
	rpc.getnewaddress(function(err, ret) {
	  if (err) {
		res.json({success : "false", message: err.toString()});
	  } else {
		res.json({success : "true", address: ret.result});
	  }
	});
  
};

exports.balance = function(req, res, next){
	rpc.getReceivedByAddress(req.params.address, 0, function(err, ret) {
	  if (err) {
		res.json({success : "false", message: err.toString()});
	  }else{
	    res.json({success : "true", balance: ret.result});
	  }
	});
  
};