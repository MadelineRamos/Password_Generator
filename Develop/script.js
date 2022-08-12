// Assignment code here

// 1. Prompt the user for the password criteria
//    - password length between 8-128
//    - lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on te criteria
// 4. Display the generated password on the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
