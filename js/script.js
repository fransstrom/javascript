/*          GISSA NUMRET             */
var keepGoing = "Y";
var number = Math.floor(Math.random() * 10 + 1);
var guess;
var counter = 0;

function game() {

    while (keepGoing === "Y" || keepGoing === "y" && counter < 3) {
        guess = prompt("Gissa ett tal mellan 1-10");
        guess = parseInt(guess);
        if (guess >= 0 && guess <= 10) {

            if (guess === number) {
                number = Math.floor(Math.random() * 10 + 1);
                alert("Rätt svar!");
                keepGoing = prompt("Spela igen? Y/vad du vill")
            }

            else {
                alert("Fel svar! Försök igen..." + number)
                counter++;
            }
        }

        else {
            alert("Fel input");
        }
    }
}

/////_---*******/////////////////////


///EXEMPEL FRÅN WEBBEN
var nIntervId;

function changeColor() {
    nIntervId = setInterval(flashText, 1000);
}

function flashText() {
    var oElem = document.getElementById('my_box');
    oElem.style.color = oElem.style.color = oElem.style.color === 'red' ? 'blue' : 'red';
    // 'red' ? 'blue' : 'red' is a ternary operator.
}

function stopTextColor() {
    clearInterval(nIntervId);
}

/////_---*******/////////////////////


//Datum och tid, start och stop.
var myVar;

function timer() {
    Clock();
    myVar = setInterval(Clock, 1000);
}

function stopTimer() {
    clearInterval(myVar);
}

function Clock() {
    document.getElementById('demo').innerHTML = Date();
}

/////_---*******/////////////////////

/*     SUPERMARKETS         */


var onionSoup = {
    onion: 3,
    potato: 3,
    bread: 1
};

var esparagusSoup = {
    esparagus: 1,
    cream: 2
};

var meatSoup = {
    onion: 1,
    potato: 4,
    leek: 1,
    meat: 1
};



var shops = {
    ICA: {
        onion: 1,
        potato: 1,
        leek: 5,
        meat: 50,
        esparagus: 25,
        cream: 15,
        bread: 20
    },
    Coop: {
        onion: 2,
        potato: 1,
        leek: 7,
        meat: 30,
        esparagus: 20,
        cream: 22,
        bread: 14
    },
    Hemköp: {
        onion: 3,
        potato: 1,
        leek: 4,
        meat: 35,
        esparagus: 15,
        cream: 20,
        bread: 10
    },
};

function costOf(recipe, shop) {
    var f;
    var sum = 0;
    for (var key in recipe) {
        f = shop[key] * recipe[key];
        sum += f;

    }
    return sum;
}


function findCheapestStore(recipe, recipeName) {

    var cheapest = null;
    var cheapestStore = null;

    for (var shopName in shops) {
        var currentCost = costOf(recipe, shops[shopName]);

        if (cheapest === null || cheapest > currentCost) {
            cheapest = currentCost;
            cheapestStore = shopName;
        }
    }
    console.log('The cheapest ' + recipeName + ' costs: ' + cheapest + ' at ' + cheapestStore);
}


//                      GAMMLA FUNKTIONEN
// var sumIca;
// var sumCoop;
// var sumHemkop;
// sumIca = costOf(recipe, shops.ICA);
// sumHemkop = costOf(recipe, shops.hemkop);
// sumCoop = costOf(recipe, shops.coop);
//
// console.log("Total kostnad ICA " + sumIca);
// console.log("Total kostnad Hemköp " + sumHemkop);
// console.log("Total kostnad Coop " + sumCoop);
//
// if (sumCoop < sumIca && sumCoop < sumHemkop) {
//     alert("Coop var billigast: " + sumCoop+"kr per portion")
//
// } else if (sumIca < sumHemkop && sumIca < sumCoop) {
//     alert("ICA var billigast: " + sumIca+"kr per portion")
// } else {
//     alert("Hemköp var billigast: " + sumHemkop+"kr per portion")
// }




    console.log(Date());
var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
};
console.log(getDaysInMonth(2, 1992));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));


//-------------------------------Name of date med list
var getNameInMonth=function(dt){
    mlist=["januari","februari","mars","april","maj", "juni","juli","augusti","oktober","september","november","december"]
    return mlist[dt.getMonth()]
}
console.log(getNameInMonth(new Date("02/12/1992")));
//



/*----------------------------Name of date utan lista
function month_name(dt) {
    const objDate = new Date(dt);
    const locale = "sv";
    const month = objDate.toLocaleString(locale, {
        month: "long"
    });
    return month;
}
console.log(month_name("10/08/2009"));
console.log(month_name("12/14/2014"));
console.log(month_name("05/11/2009"));
console.log(month_name("07/18/2014"));
*/


//----------------------------Räknar ut dagen på datum i functionen
var getNameInDay=function(day){
    var day = day.getDay();
    dList=["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];
    return dList[day]
}
console.log(getNameInDay(new Date("02/12/1992"))+"\n"+startTime());



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if(m<10){
        m="0"+m
    }    if(h<10){
        h="0"+h
    }if(s<10){
        s="0"+s
    }
return h + ":" + m + ":" + s;
}

//------------------------Skriver ut innehållet i ett element--
function printContent(el){
var restorepage = document.body.innerHTML;
var printcontent= document.getElementById(el).innerHTML;
document.body.innerHTML = printcontent;
window.print();
document.body.innerHTML=restorepage;
}
/////////////////////////////////////////////////////



//---------------- CUSTOM DATUM
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
//////////////////////////////////////////

function print_current_page()
{
    window.print();
}


function animate_string(id)
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function ()
    {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}


function multiply(){
    var num1;
    var num2;
    num1=document.getElementById('firstnumber').value;
    num2=document.getElementById('secondnumber').value;
    document.getElementById('result').innerHTML=num1+"*"+num2+" = "+num1*num2;;
}
function divide(){
    var num1;
    var num2;
    num1=document.getElementById('firstnumber').value;
    num2=document.getElementById('secondnumber').value;
    document.getElementById('result').innerHTML=num1+"/"+num2+" = "+num1/num2;
}

function dayName(){
    var mm;
    var dd;
    var yyyy;
    var div = '/';

    mm=document.getElementById('month').value+"/";
    dd=document.getElementById('day').value+"/";
    yyyy=document.getElementById('year').value;

    var date=mm+dd+yyyy;
    console.log(date);


   document.getElementById('weekday').innerHTML=(getNameInDay(new Date(date)));


}


