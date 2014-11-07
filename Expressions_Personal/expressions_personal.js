/*  LaToya Morgan
    WPF Section 01
    Nov 5, 2014
    Personal Expressions
*/

//alert("Javescript Works");

//Calculation for hours worked

//Ask user the amount of money they were paid in total and the amount they made per hour
var totalAmount = prompt("How much money were you paid in total?");
console.log(totalAmount);

var hourlyAmount = prompt("How much were you paid hourly?");
console.log(hourlyAmount)

var hoursWorked = totalAmount / hourlyAmount;

alert("You worked about "+hoursWorked+" hours.");
