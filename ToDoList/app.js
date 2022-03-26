const express = require("express");
const bodyParser = require("body-parser")
let tasks = [];
let workTask = []
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs");



app.get('/', function(req,res){
    let today = new Date();
    let options = {
        weekday:"long",
        day: "numeric",
        month: "long",
    };
    let day = today.toLocaleDateString("en-UD", options);
    
    res.render("list", {listTitle: day, addTask: tasks})
});

app.post("/", function(req, res){
    task = req.body.newTask;
    if (req.body.list === "Work Task") {
        workTask.push(task);
        res.redirect("/work")
    }
    else {
        tasks.push(task);
        res.redirect("/")
    };

    
});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work Task", addTask: workTask})

})


app.listen(3000);
