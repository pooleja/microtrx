var bitcore = require('bitcore');
var Message = bitcore.Message;
var base58 = bitcore.base58;

var network = bitcore.networks['livenet'];

$( document ).ready(function() {
	
	$( "#create-key-form" ).submit(function( event ) {
		var secret = $("#secretKeyPassword").val();
		
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

			$("#generated-private-key").text(key.private.toString('hex'));
			$("#generated-public-key").text(addr.toString());
			console.log("Brain wallet address: " + addr.toString());
		}
		event.preventDefault();
	});
	
	$( "#sign-message-form" ).submit(function( event ) {
		var secret = $("#secretKeyPassword").val();
		var messageString = $("#messageTextToSign").val();
		
		if(!secret){
			alert("Please generate a key first.");
		} else if (!messageString){
			alert("Please enter a message to sign first.");
		} else{
			var privateKey = bitcore.util.sha256(secret);

			var key = new bitcore.Key();
			key.private = privateKey;
			key.regenerateSync();

			var sig = Message.sign('my message', key);			
			$("#signedMessageHash").text(sig.toString('hex'));
		}
		event.preventDefault();
	});
	
	$( "#validate-signature-form" ).submit(function( event ) {
		var publicKey = $("#generated-public-key").text();
		var messageString = $("#messageTextToSign").val();
		var messageSignature = $("#signedMessageHash").text();
		
		if(!publicKey){
			alert("Please generate a key first.");
		}  else if (!messageSignature || !messageString){
			alert("Please sign a message first.");
		} else{
			
		}
		event.preventDefault();
	});
	
	
});