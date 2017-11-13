var keepGoing="Y";
var number=Math.floor(Math.random()*10+1);



function game(){

while(keepGoing=="Y"){
var guess = prompt("Gissa ett tal mellan 1-10");

if (guess==number){
number=Math.floor(Math.random()*10+1);
alert("Rätt svar!");
keepGoing=prompt("Spela igen? Y/N")

}else{
  alert("Fel svar! Försök igen")
}
}
}

function updateClock() {
  // Ivo's content to create the date.
  document.getElementById('demo').innerHTML = Date();
  setInterval(updateClock, 1000);
}
