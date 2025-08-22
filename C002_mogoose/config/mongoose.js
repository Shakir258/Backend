const mongoose = require('mongoose');
const debuglog = require('debug')("development");

mongoose.connect('mongodb://127.0.0.1:27017/testShakir1');

const db = mongoose.connection;

db.on('error', function(error){
    debuglog(error);
})

db.on("open",function(){
    debuglog("connected to the db");
})

module.exports = db;
