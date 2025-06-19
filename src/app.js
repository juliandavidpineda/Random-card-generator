import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  let palos = ["♦", "♥", "♠", "♣"];

  let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];
  
  let domPalosUp = document.querySelector("#palosUp");
  let domPalosDown = document.querySelector("#palosDown");
  let domCenter = document.querySelector("#numb");

  if (randomPalos === "♦" || randomPalos === "♥") {
  domPalosUp.style.color = "red";
  domPalosDown.style.color = "red";
  domCenter.style.color = "red"
}
  
  domPalosUp.innerText = randomPalos;
  domPalosDown.innerText = randomPalos;
  domCenter.innerText = randomNumbers;

  let reloadButton = document.getElementById("reloadButton");
  reloadButton.innerText = "Recargar página"

};