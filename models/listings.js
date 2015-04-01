var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListingSchema = new Schema({
    show: {type: Number, ref: 'Show', index: true},
    list: {type: mongoose.Schema.Types.ObjectId, ref: 'List', index: true},
});

module.exports = mongoose.model('Listing', ListingSchema);
