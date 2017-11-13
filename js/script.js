
    var keepGoing = "Y";
    var number = Math.floor(Math.random() * 10 + 1);
    var guess;


    function game() {

      while (keepGoing === "Y") {
        guess = prompt("Gissa ett tal mellan 1-10");
        guess=parseInt(guess);
        if(typeof guess === 'number'){

        if (guess === number) {

          number = Math.floor(Math.random() * 10 + 1);
          alert("Rätt svar!");
          keepGoing = prompt("Spela igen? Y/N")

        } else {
          alert("Fel svar! Försök igen")
        }
      }
      else{
        alert("Fel input");
    }
    }
    }



    ///EXEMPEL FRÅN WEBBEN
    var nIntervId;

    function changeColor() {
      nIntervId = setInterval(flashText, 1000);
    }

    function flashText() {
      var oElem = document.getElementById('my_box');
      oElem.style.color = oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
      // 'red' ? 'blue' : 'red' is a ternary operator.
    }

    function stopTextColor() {
      clearInterval(nIntervId);
    }


    //Datum och tid, start och stop.
    var myVar;

    function timer(){
      myVar=setInterval(Clock,1000);
    }

    function stopTimer(){
    clearInterval(myVar);
    }

    function Clock() {
      document.getElementById('demo').innerHTML = Date();
    }
