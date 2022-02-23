var randomNuber1 = Math.random()*6 +1;
randomNuber1 = Math.floor(randomNuber1);
source1 = "images/dice"+randomNuber1+".png";
document.querySelector(".img1").setAttribute("src", source1);

var randomNuber2 = Math.random()*6 +1;
randomNuber2 = Math.floor(randomNuber2);
source2 = "images/dice"+randomNuber2+".png";
document.querySelector(".img2").setAttribute("src", source2);

if (randomNuber1 > randomNuber2) {
    document.querySelector("h1").textContent="Player 1 wins!";
}
else if (randomNuber1 === randomNuber2) {
    document.querySelector("h1").textContent="Draw!";
}
else {
    document.querySelector("h1").textContent="Player 2 wins!";
}