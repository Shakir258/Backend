const express = require('express');


const app = express()

app.get('/pro', (req, res) => {
    res.send('profiles')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})