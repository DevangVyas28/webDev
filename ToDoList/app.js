const express = require("express");
const bodyParser = require("body-parser")
let tasks = [];
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");



app.get('/', function(req,res){
    let today = new Date();
    let options = {
        weekday:"long",
        day: "numeric",
        month: "long",
    };
    let day = today.toLocaleDateString("en-UD", options);
    
    res.render("list", {dayOfWeek: day, addTask: tasks})
});

app.post("/", function(req, res){
    task = req.body.newTask;
    tasks.push(task);
    res.redirect("/")
});


app.listen(3000);
