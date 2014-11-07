/*  LaToya Morgan
    WPF Section 01
    Nov 5, 2014
    Personal Expressions
*/

//alert("Javescript Works");

//Calculation for projected hours of sleep

//Ask user the time they will go to bed and the time they plan to wake up the next morning
var timeToBed = prompt("What time will you go to bed tonight? 24h time");
console.log(timeToBed);

var timeWaking = prompt("What time will you be waking up tomorrow? 24h time");
console.log(timeWaking)

var hoursSlept = timeWaking - timeToBed;

alert("You will sleep about "+hoursSlept+" hours.");
