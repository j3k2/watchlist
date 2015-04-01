var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
    category: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true},
    listings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Listing', index: true}],
    shows: [{type: Number, ref: 'Show', index: true}]
});

module.exports = mongoose.model('List', ListSchema);
