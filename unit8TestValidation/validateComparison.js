//Brandon Treu 900704435
//Test Plan - input two numbers, compare them and display the larger of the two
//
// 	Value1		value2		Expected Result
// 	5			6		6
// 	4			3		4
// 	3			3		"The amounts are equal"		They entered numbers, same numbers they are equal
// 	a			5		"Please enter a number in Value 1"
// 	5			a		"Please enter a number in Value 2"
// 	""			5		"Please enter a number in Value 1"
// 	5			""		"Please enter a number in Value 2"
// 	-1			5		5
// 	+34			-30		34
// 	-5			-6		-5
// 	5			-1		5
// 	1.5			2		2
// 	2			1.5		2
// 	3/4			1		"Please enter a number in Value 1"	Fractions are not integers or decimal numbers
// 	5b			3		"Please enter a number in Value 1"
// 	3			5b		"Please enter a number in Value 2"
// 	""			5		"Please enter a number in Value 1"
// 	5			""		"Please enter a number in Value 2"

let number1 = [5];
let number2 = [6];

function numberTest (array1, array2){
    if (array1 > array2){
        console.log(array1 + "Is Bigger!")
    }
    else if (array2 > array1){
        console.log(array2 + "Is Bigger!")
    }
    else {
        console.log("They are equal");
    }
}

numberTest(number1, number2);