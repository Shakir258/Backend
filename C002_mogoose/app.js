const express = require('express');
const app = express();
const mongooseconnection = require('./config/mongoose');

app.get('/', (req, res, next) => {
    
    res.send("hello")

}) 



app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})