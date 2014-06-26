var bitcore = require('bitcore');
var bitcore = require('bitcore');
var Message = bitcore.Message;
var base58 = bitcore.base58;

var network = bitcore.networks['testnet'];

// Grabs the address in the browser and retrieves the balance (confirmed + unconfirmed)
function updateBalance() {

    var address = $("#generated-address").text();

    $.ajax({
      url: "http://test-insight.bitpay.com/api/addr/" + address
    })
      .done(function( res ) {
        var confirmed = parseFloat(res.balance);
        var unconfirmed = parseFloat(res.unconfirmedBalance);
        var total = confirmed + unconfirmed;

        console.log("Total balance for address is: " + total + " BTC");
        $("#balance").text(total + " BTC");
      });
}

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
            $("#qr-code").empty();
            $("#qr-code").qrcode({width: 96,height: 96,text: addr.toString()});

            console.log("Brain wallet address: " + addr.toString());
        }
        event.preventDefault();

        updateBalance();
        window.setInterval(updateBalance, 5000);
    });
    

    
    
});