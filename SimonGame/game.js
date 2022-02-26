var userClickedPattern = []
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

$("*").keydown(nextSequence)

// create a random number
function nextSequence() {
    var randomNumber = Math.round(Math.random()*3);
    return randomNumber;
}

var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor)
console.log(randomChosenColor)

$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// var soundFile = 'sounds/'+randomChosenColor+".mp3"
// var audio = new Audio(soundFile);
// audio.play();

function playSound(name) {
    var soundFile = 'sounds/'+name+".mp3"
    var audio = new Audio(soundFile);
    audio.play();
}

$(".btn").click(function (event) {
    var userChosenColor = event.target.id
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
    animatePress(userChosenColor)
})

function animatePress(currentColor) {
    var buttonId = "#"+currentColor
    $(buttonId).addClass("pressed")
    setTimeout(function() {
        $(buttonId).removeClass("pressed")
    },300)
}