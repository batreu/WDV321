//brandon treu 900704435

let assert = require('chai').assert;

describe('Which Number is Greater?',function (){
    it('6 is greater than 5', function () {// 	5			6		6
        let number1 = 5;
        let number2 = 6;
        assert.isBelow(number1, number2, '6 is greater than 5');
    });
    it('4 is greater than 3', function () {// 	4			3		4
        let number1 = 4;
        let number2 = 3;
        assert.isAbove(number1, number2, '4 is greater than 3');
    });
    it('3 is equal to 3', function () {// 	3			3		"The amounts are equal"		They entered numbers, same numbers they are equal
        let number1 = 3;
        let number2 = 3;
        assert.equal(number1, number2, '3 is equal to 3');
    });
    it('a is not a number', function () {// 	a			5		"Please enter a number in Value 1"
        let number1 = "a";
        let number2 = 5;
        assert.isString(number1, number2, 'a is not a number');
    });

    it('Null is not a number', function () {// 	""			5		"Please enter a number in Value 1"
        let number1 = "";
        let number2 = 5;
        assert.isString(number1, number2, 'Null is not a number');
    });
    it('Null is still not a number', function () {// 	5			""		"Please enter a number in Value 2"
        let number1 = 5;
        let number2 = "";
        assert.isString(number2, number1, 'Null is still not a number');
    });
    it('-1 is less than 5', function () {// 	-1			5		5
        let number1 = -1;
        let number2 = 5;
        assert.isBelow(number1, number2, '-1 is less than 5');
    });
    it('34 is greater than -30', function () {// 	+34			-30		34
        let number1 = 34;
        let number2 = -30;
        assert.isAbove(number1, number2, '34 is greater than -30');
    });
    it('-5 is greater than -6', function () {// 	-5			-6		-5
        let number1 = -5;
        let number2 = -6;
        assert.isAbove(number1, number2, '-5 is greater than -6');
    });
    it('5 is greater than -1', function () {// 	5			-1		5
        let number1 = 5;
        let number2 = -1;
        assert.isAbove(number1, number2, '5 is greater than -1');
    });
    it('1.5 is less than 2', function () {// 	1.5			2		2
        let number1 = 1.5;
        let number2 = 2;
        assert.isAbove(number2, number1, '1.5 is less than 2');
    });
    it('2 is greater than 1.5', function () {// 	2			1.5		2
        let number1 = 1.5;
        let number2 = 2;
        assert.isBelow(number1, number2, '2 is greater than 1.5');
    });
    it('3/4 is not a number', function () {// 	3/4			1		"Please enter a number in Value 1"	Fractions are not integers or decimal numbers
        let number1 = "3/4";
        let number2 = 1;
        assert.isString(number1, number2, '3/4 is not a number');
    });
    it('5b is not a number', function () {// 	5b			3		"Please enter a number in Value 1"
        let number1 = "5b";
        let number2 = 3;
        assert.isString(number1, number2, '5b is not a number');
    });
    it('5b is still not a number', function () {// 	3			5b		"Please enter a number in Value 2"
        let number1 = 3;
        let number2 = "5b";
        assert.isString(number2, number1, '5b is still not a number');
    });
    it('Value 1 is not a number', function () {// 	""			5		"Please enter a number in Value 1"
        let number1 = "";
        let number2 = 5;
        assert.isString(number1, number2, 'Value 1 is not a number');
    });
    it('Value 2 is not a number', function () {// 	5			""		"Please enter a number in Value 2"
        let number1 = 5;
        let number2 = "";
        assert.isString(number2, number1, 'Value 2 is not a number');
    });
});