function validatePIN(pin) {
  // Uses regex function that tests if pin is a 4-digit or 6-digit number.
  // The caret (^) and dollar sign ($) ensure that the string must be 4 or 6 digits (not just contain a 4 or 6 digit number).
  // The test() method returns true if the string matches the regex, false if it doesn't.
  return /^(\d{4}|\d{6})$/.test(pin);
}

// console.log(validatePIN("1234")); // true
// console.log(validatePIN("123456")); // true
// console.log(validatePIN("a234")); // false
// console.log(validatePIN("12345")); // false
// console.log(validatePIN("12039120391039")); // false
// console.log(validatePIN("Deez Nuts")); // false
// console.log(validatePIN("-1234")); // false
// console.log(validatePIN("-124")); // false
