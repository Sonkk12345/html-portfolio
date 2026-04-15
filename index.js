let numberRandom1;
numberRandom1 = Math.floor(Math.random() * 6) + 1;
let numberRandom2;
numberRandom2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".btn").onclick = function () {
  location.reload();
};
document.querySelector(".img1").src = "images/dice" + numberRandom1 + ".png";
document.querySelector(".img2").src = "images/dice" + numberRandom2 + ".png";
if (numberRandom1 > numberRandom2) {
  document.querySelector("h1").innerHTML = "Player 1 win 🚩";
} else if (numberRandom1 < numberRandom2) {
  document.querySelector("h1").innerHTML = "Player 2 win 🚩";
} else if (numberRandom1 === numberRandom2) {
  document.querySelector("h1").innerHTML = "Balance 😊";
} else {
  document.querySelector("h1").innerHTML = "Refresh me";
}
