const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    fs.readdir(`./files`,function(err,files){
        res.render("index", {files:files});
    })

})


app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description, function(err){
        res.redirect('/')
    })
    
})


app.get('/file/:filename', (req, res) => {
    fs.readFile("./files/"+req.params.filename, function(err ,data){
        res.render("show", {filename: req.params.filename, data: data.toString()})
    })
})




app.listen(3000, function(){
    console.log("listening on port 3000")
})