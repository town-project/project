const mongoose = require('mongoose');
const {Schema} = mongoose;

const Author = new Schema({
    userId: String,
    passwood: String,
});

const UserInfo = new Schema({
    userId: String,
    username: String,
    nickname: String,
    phone: Number,
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('UserInfo', UserInfo)