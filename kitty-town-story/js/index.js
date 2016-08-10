var story = document.getElementById("story");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var name;

function boring() {
  alert("ok I understand");
  story.innerHTML = "Goodbye."
  opt1.innerHTML = "";
  opt2.innerHTML = "";
}

function play() {
  name = prompt("What is your name, kitty town cittezin");
  story.innerHTML = "Welcome, " + name +". you dont know the town well so you go out to look around";
  opt1.innerHTML = "meOW street";
  opt1.onclick = function() {meow()};
  opt2.innerHTML = "CATchy drive";
  opt2.onclick = function() {catchy()};
}

function meow() {
   story.innerHTML = "there are nails everywhere, you get one stuck in your paw";
  opt1.innerHTML = " ceep looking around";
  opt1.onclick = function() {looking()};
  opt2.innerHTML = "leave";
  opt2.onclick = function() {leave()};
}
 
function catchy () {
  alert("big disco party.")
}

function leave() {
   story.innerHTML = "you go to the kitty hospital and are all better, but dicide never to go back.THE END";
}

function catchy() {
   story.innerHTML = "ay the disco party they ask you to sing";
  opt1.innerHTML = " it would be an honer to sing";
  opt1.onclick = function() {looking()};
  opt2.innerHTML = "run out of the disco party.";
  opt2.onclick = function() {leave()};
}