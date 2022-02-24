var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("Button Clicked");
    });
};