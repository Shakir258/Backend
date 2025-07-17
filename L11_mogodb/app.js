const express = require('express');
const app = express();

const userModle =  require('./userModel')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/create', async (req, res) => {
    const createdUser = await userModle.create({
        name: "shakir",
        userName: "shakir123",
        email: "shakir@gmail.com"
    })
    res.send(createdUser);
})
app.get('/update', async (req, res) => {
    const updatedUser = await userModle.findOneAndUpdate({name: "shakir"}, {name: "shakir siddiqui"},{new:true})
    res.send(updatedUser);
})
app.get('/read', async (req, res) => {
    const users = await userModle.find();
    res.send(users);
})
app.get('/delete', async (req, res) => {
    const users = await userModle.findOneAndDelete({name: "shakir siddiqui"});
    res.send(users);
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
