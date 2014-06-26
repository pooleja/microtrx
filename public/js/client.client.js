var bitcore = require('bitcore');
var bitcore = require('bitcore');
var Message = bitcore.Message;
var base58 = bitcore.base58;

var network = bitcore.networks['testnet'];

$( document ).ready(function() {
	
	$( "#create-key-form" ).submit(function( event ) {
		var secret = $("#secret-key-password").val();
		
		if(!secret){
			alert("Please enter a secret.");
		}else{
			var privateKey = bitcore.util.sha256(secret);

			var key = new bitcore.Key();
			key.private = privateKey;
			key.regenerateSync();

			var hash = bitcore.util.sha256ripe160(key.public);
			var version = network.addressVersion;

			var addr = new bitcore.Address(version, hash);
			
			$("#generated-address").text(addr.toString());
			console.log("Brain wallet address: " + addr.toString());
		}
		event.preventDefault();
	});
	

	
	
});