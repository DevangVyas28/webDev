var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonPressed = this.innerHTML; 
        makeSound(buttonPressed)
        buttonAnimation(buttonPressed)
    });
};

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;
        case "d":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play()
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activateButton = document.querySelector("."+currentKey);
    activateButton.classList.add("pressed");
    setTimeout(function(){activateButton.classList.remove("pressed")}, 100);
}