/*  LaToya Morgan
    WPF Section 01
    Nov 5, 2014
    Personal Expressions
*/

//alert("Javescript Works");

//Calculation for hours worked

//Ask user the amount of money they were paid in total
    var totalAmount = prompt("Hello. Let's begin calculating how many hours you have worked this        pay period. How much money were you paid in total?");
    console.log(totalAmount);

//Ask user how much they are paid hourly
    var hourlyAmount = prompt("How much were you paid hourly?");
    console.log(hourlyAmount)

//Calculation
    var hoursWorked = totalAmount / hourlyAmount;

//Solution
    alert("You worked about "+hoursWorked+" hours.");
