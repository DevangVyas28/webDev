const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const appId =  "&appid=d9bd072947d2dbbd1c278081d4df0fe2"
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
var location = null;
var tempUnit = null;
var dataList = null;
console.log(location);
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    location = req.body.location;
    tempUnit = req.body.unit;
    console.log(location);
    console.log(tempUnit);
    apiRequest(location, tempUnit);
})

function apiRequest(loc, temperature) {
    var call = url + loc + appId + "&units=" +temperature;
    https.get(call, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const imageUrl = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
            dataList = [temp, weatherDesc, imageUrl]

        })
    })
}

function result(apiResList) {

}

app.get('/result', function(req, res){
    res.write("<img src="+dataList[2]+">");
    res.write("<h1>"+ dataList[0]+"</h1>");
    res.send();
})

app.listen(3000);
