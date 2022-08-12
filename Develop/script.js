// Assignment code here

var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharactersArray = ["!","#","$","%","&","*","+","/",":",";","<","=",">","?","@","["];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var passwordLength = window.prompt("Please enter the length of your password");

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a number between 8 and 128");
    passwordLength = window.prompt("Please enter the length of your password");
  }

  var lowerCase = window.confirm("Would you like to include lowercase letters?");
  var upperCase = window.confirm("Would you like to include uppercase letters?");
  var numbers = window.confirm("Would you like to include numbers?");
  var specialCharacters = window.confirm("Would you like to include special characters?");

  while (!lowerCase && !upperCase && !numbers && !specialCharacters) {
    window.alert("At least one character type needs to be selected");
    lowerCase = window.confirm("Would you like to include lowercase letters?");
    upperCase = window.confirm("Would you like to include uppercase letters?");
    numbers = window.confirm("Would you like to include numbers?");
    specialCharacters = window.confirm("Would you like to include special characters?");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
