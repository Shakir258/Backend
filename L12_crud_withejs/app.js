const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , "public")));


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/read', async(req, res) => {
    await userModel.find().then((users) => {
        res.render("read", {users})
    })
})
app.get('/delete/:id', async(req, res) => {
    await userModel.findOneAndDelete({_id: req.params.id}).then((users) => {
        res.redirect('/read');
    })
})

app.get('/edit/:userid', async(req, res) => {
    const user = await userModel.findOne({_id: req.params.userid})
    res.render("edit", {user})
})



app.post('/update/:userid', async (req, res) => {
    let {name, email, image} = req.body;
    await userModel.findOneAndUpdate({_id: req.params.userid}, {name, email, image}).then((users) => {
        res.redirect('/read');
    })
})

app.post('/create', async (req, res) => {
    let {name, email, image} = req.body;
    await userModel.create({
        name,
        email,
        image
    });
    res.redirect('/read');
})



app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
