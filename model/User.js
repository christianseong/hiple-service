const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the user shcema

const UserSchema = new Schema({
    name : {
        type : String,
        required: true,
    },
    username : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
    },
    password : {
        type : String,
        required: true,
    },
    room:[{ roomId : {type : String , required : true, unique  : true}   ,name : {type : String , required : true, unique: true}}],
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = User =  mongoose.model('users',UserSchema)