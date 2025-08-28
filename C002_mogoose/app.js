const express = require('express');
const app = express();
const mongooseconnection = require('./config/mongoose');
const userModule = require('./models/usermodel');
const debuglog = require('debug')("development:app");

app.use(express.json());  // for parsing json
app.use(express.urlencoded({extended: true})); // for parsing url

app.get('/', (req, res, next) => {
    res.send("hello")
}) 

app.post('/create', async (req, res ,next) => {
    res.send(req.body);
})

// app.get('/create', async (req, res ,next) => {
//     let createdUser = await userModule.create({
//         name: "shakir",
//         email: "shakir@gmail.com",
//         password: "shak258",
//         username: "shakir123"
//     })
//     debuglog(createdUser);
//     res.send(createdUser);
// })
// app.get('/read', async (req, res ,next) => {
//     const user = await userModule.find({name: "shakir"})
//     debuglog('reades');
//     res.send(user); 
// })

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})