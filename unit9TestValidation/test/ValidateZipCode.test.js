// JavaScript Document Brandon Treu 900704435

var assert = require('chai').assert;
var ValidateZipCode = require('../app/ValidateZipCode');

//Testing Validate ZipCode

describe("Testing Validate ZipCode", function(){



	it("No input should fail", function(){
		assert.isFalse(ValidateZipCode(""));
	});

	it("A space and nothing entered should fail", function(){
		assert.isFalse(ValidateZipCode(" "));
	});

	it("Two spaces and nothing entered should fail", function(){
		assert.isFalse(ValidateZipCode("  "));
	});

	it("Null should fail", function(){
		assert.isFalse(ValidateZipCode("null"));
	});

	it("Undefined should fail", function(){
		assert.isFalse(ValidateZipCode("undefined"));
	});

	it("5 characters should fail", function(){
		assert.isFalse(ValidateZipCode("bbbbb"));
	});

	it("1 digit should fail", function(){
		assert.isFalse(ValidateZipCode("3"));
	});

	it("6 digits should fail", function(){
		assert.isFalse(ValidateZipCode("123456"));
	});

	it("4 digits should fail", function(){
		assert.isFalse(ValidateZipCode("1234"));
	});

	it("5 digits should pass", function(){
		assert.isTrue(ValidateZipCode("12345"));
	});

	it("whitespace before should pass", function(){
		assert.isTrue(ValidateZipCode("    12345"));
	});

	it("whitespace after should pass", function(){
		assert.isTrue(ValidateZipCode("12345   "));
	});

	it("Characters between digits should fail", function(){
		assert.isFalse(ValidateZipCode("1-2-3-4-5"));
	});

	it("mixture of numbers and letters should fail", function(){
		assert.isFalse(ValidateZipCode("123c4"));
	});


});