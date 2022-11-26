// JavaScript Document Brandon Treu 9900704435

var ValidateZipCode = function(inValue){
  inValue += "";	//turns all inValues into strings for testing
  if(!/^[0-9]{5}$/.test(inValue.trim())){
    return false;
  }
  return true;
}

module.exports = ValidateZipCode;
