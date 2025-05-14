import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  let whoPart = who[Math.floor(Math.random() * who.length)];
  let actionPart = action[Math.floor(Math.random() * action.length)];
  let whatPart = what[Math.floor(Math.random() * what.length)];
  let whenPart = when[Math.floor(Math.random() * when.length)];

  let excuse = whoPart + " " + actionPart + " " + whatPart + " " + whenPart;
  return excuse;
}
window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};