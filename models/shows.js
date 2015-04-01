var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ShowSchema = new Schema({
    _id: {type: Number, required: true},
    title: String,
    desc: String,
    imgUrl: String
});
module.exports = mongoose.model('Show', ShowSchema);
