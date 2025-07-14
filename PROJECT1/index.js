// Express module ko import kar rahe hain
const express = require('express');
const app = express();

// Path module for directory paths
const Path = require("path");

// Middleware to parse JSON data (API se data milne par readable banata hai)
app.use(express.json());

// Middleware to parse URL-encoded data (form se data milne par readable banata hai)
app.use(express.urlencoded({ extended: true }));

// Static files serve karne ke liye (CSS, JS, images etc.) => "public" folder ko access karta hai
app.use(express.static(Path.join(__dirname, "public")));

// View engine set kar rahe hain "ejs" ke liye (template rendering ke liye)
app.set("view engine", "ejs");

// Root route: jab koi "/" pe aaye to index.ejs file render karo
app.get("/", function (req, res) {
    res.render("index");
});

// Dynamic route with username: URL me se "username" nikal ke response bhejta hai
app.get("/profile/:username", function (req, res) {
    res.send("welcome, " + req.params.username);
});

// Another dynamic route with username and age: age ignore ho rahi hai yahan
app.get("/profile/:username/:age", function (req, res) {
    res.send("welcome, " + req.params.username + ", age: " + req.params.age);

});

// Server ko port 3000 par chalu kar rahe hain
app.listen(3000, function () {
    console.log("server is runing");
});
