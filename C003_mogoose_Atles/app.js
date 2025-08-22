const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(
    'mongodb+srv://Shakir:1Shakir258%40%40@shakir123.oc3rwak.mongodb.net/?retryWrites=true&w=majority&appName=Shakir123'
).then(function(){
    console.log("connected to the db");
});

app.get('/', (req, res, next) => {
    
    res.send("hello")

}) 



app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})