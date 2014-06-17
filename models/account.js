// The Account model
 
var mongoose = require('mongoose');
 
var accountSchema = mongoose.Schema({
    paymentAddress: String,
    refundAddress: String
});
module.exports = mongoose.model('Account', accountSchema);
	
