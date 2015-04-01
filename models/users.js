var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: String,
    password: String,
    lists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List', index: true}],
    ratings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Rating', index: true}]
});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
