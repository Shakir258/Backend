const monogoose = require('mongoose');

monogoose.connect('mongodb://localhost:27017/testapp1');

const userSchema = monogoose.Schema({
    image: String,
    name: String,
    email: String
})

module.exports = monogoose.model('user', userSchema);