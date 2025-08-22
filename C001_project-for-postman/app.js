const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    
    try{
        res.send(Hello)
    }catch(err){
        next(err) 
    }
})

app.get('/check', (req, res) => {
    res.send('Hello World!')
})

// error hendler

app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})