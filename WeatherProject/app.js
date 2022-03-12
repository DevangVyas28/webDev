const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    var location = req.body.location;
    var tempUnit = req.body.unit;
    console.log(location);
    console.log(tempUnit);
})

app.listen(3000);
