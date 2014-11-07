/*  LaToya Morgan
    WPF Section 01
    Nov 5, 2014
    Wacky Expressions
*/

//alert("Javescript Works");

//Calculation for Massive Picnic - how many blankets needed for massive blanket to put on a football field.

//Football Field Area
    var fieldLength = prompt("It's time once again for the Annual Football Field Picnic. Let's see      how many blankets we will need to sew this year's blanket. What is the length of the football      field? (inches)");
    console.log(fieldLength);

    var fieldWidth = prompt("What is the width of the football field? (inches)");
    console.log(fieldWidth);

     var fieldArea = fieldLength * fieldWidth;

//Blanket Area
     var blanketLength = prompt("What is the length of the blanket template? (inches)");
    console.log(blanketLength);

    var blanketWidth = prompt("What is the width of the blanket template? (inches)");
    console.log(blanketWidth);

    var blanketArea = blanketLength * blanketWidth;

//Blankets Needed
    var blanketsTotal = fieldArea / blanketArea;

    alert("We will need "+blanketsTotal+" blankets to make one massive blanket for this football       field.");
