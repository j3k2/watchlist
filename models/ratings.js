var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var RatingSchema = new Schema({
    category: String,
    value: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true},
    show: {type: Number, ref: 'Show', index: true},

});


module.exports = mongoose.model('Rating', RatingSchema);
