//Character Variables
var symbolChar = "!@#$%^&*()_-+={}[]:;'<>?,./~`".split("");
var numChar = "1234567890".split("");
var lowerChar = "abcdefghijklmnopqrstuvwxyz".split("");
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Assignment Code (included)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (included)
function writePassword() {

  // start of the loop of series of prompts for password criteria
  var wantPass = confirm("Would you like to generate a password?")
  if (wantPass === true) {

    // Prompt user to enter how many characters will be in the password generated
    var passChar = prompt("How many characters would you like your password to contain?")
    // Loop: when the user enters amount of characters under 8 or over 128 this will first alert them that it needs to be between 8 and 128 and then ask the prompt again, until answered correctly
    for (passChar === false; passChar < 8 || passChar > 128; passChar++) {
      alert("Password needs to be between 8 - 128 characters.");
      passChar = prompt("How many characters would you like your password to contain?");
    }
  }
  // this will turn the chosen character amount user selected from a string to a number
  var passLength = Number(passChar);

  // The following variables need to be confirmed by the user to determine which types of characters will be in the password generated
  var passSymbolChar = confirm("Click okay to confirm including specialized characters.");
  var passNumChar = confirm("Click okay to confirm including number characters.");
  var passUpperChar = confirm("Click okay to confirm including uppercase characters.");
  var passLowerChar = confirm("Click okay to confirm including lowercase characters.");

  // this creates an array of the character types
  var charTypes = [passSymbolChar, passNumChar, passUpperChar, passLowerChar];

  //Loop: this loop says that the array is false if all the variables are answered false. if they answer false to all 3 character types the user will get an alert that at least one type of character should be chosen and then the user will be  asked the prompts again, until at least one is picked
  for (charTypes === false; !passSymbolChar && !passNumChar && !passUpperChar && !passUpperChar; charTypes++) {
    alert("At least one type of character should be chosen.");
    passSymbolChar = confirm("Click okay to confirm including specialized characters.");
    passNumChar = confirm("Click okay to confirm including number characters.");
    passUpperChar = confirm("Click okay to confirm including uppercase characters.");
    passLowerChar = confirm("Click okay to confirm including lowercase characters.");
  }

  if (passSymbolChar && passNumChar && passUpperChar && passLowerChar) {
    var selectChar = symbolChar.concat(numChar).concat(upperChar).concat(lowerChar);
  }
  else if (passSymbolChar && passNumChar && passUpperChar && passLowerChar === false) {
    var selectChar = symbolChar.concat(numChar).concat(upperChar);
  }
  else if (passSymbolChar && passNumChar && passUpperChar === false && passLowerChar === false) {
    var selectChar = symbolChar.concat(numChar);
  }
  else if (passSymbolChar && passNumChar === false && passUpperChar === false && passLowerChar === false) {
    var selectChar = symbolChar;
  }
  else if (passSymbolChar && passNumChar && passUpperChar === false && passLowerChar) {
    var selectChar = symbolChar.concat(numChar).concat(lowerChar);
  }
  else if (passSymbolChar && passNumChar === false && passUpperChar === false && passLowerChar) {
    var selectChar = symbolChar.concat(lowerChar);
  }
  else if (passSymbolChar === false && passNumChar === false && passUpperChar === false && passLowerChar) {
    var selectChar = lowerChar;
  }
  else if (passSymbolChar === false && passNumChar && passUpperChar === false && passLowerChar === false) {
    var selectChar = numChar;
  }
  else if (passSymbolChar === false && passNumChar === false && passUpperChar && passLowerChar === false) {
    var selectChar = upperChar;
  }
  else if (passSymbolChar === true && passNumChar === false && passUpperChar && passLowerChar === false) {
    var selectChar = symbolChar.concat(upperChar);
  }
  else if (passSymbolChar && passNumChar === false && passUpperChar && passLowerChar) {
    var selectChar = symbolChar.concat(upperChar).concat(lowerChar);
  }
  else if (passSymbolChar === false && passNumChar && passUpperChar && passLowerChar) {
    var selectChar = numChar.concat(upperChar).concat(lowerChar);
  }
  else if (passSymbolChar === false && passNumChar && passUpperChar && passLowerChar === false) {
    var selectChar = numChar.concat(upperChar);
  }
  else if (passSymbolChar === false && passNumChar && passUpperChar === false && passLowerChar) {
    var selectChar = numChar.concat(lowerChar);
  }
  else if (passSymbolChar === false && passNumChar === false && passUpperChar && passLowerChar) {
    var selectChar = upperChar.concat(lowerChar);
  };

// this creates the array for the randomized passwords characters to go in
  var randomPass = [];
// this loop creates the random password based off the length and character types the user chooses 
  for (var i = 0; i < passLength; i++) {
    k = Math.floor(Math.random() * selectChar.length - 1);
    randomPass.push(selectChar[k]);
  } 
// this joins together the individual characters from the array into a password
  var rP = randomPass.join('');
  console.log(rP)

  var passwordText = document.querySelector("#password");

  // this diplays the password
  passwordText.value = rP;

}

// Add event listener to generate button (included)
generateBtn.addEventListener("click", writePassword);


