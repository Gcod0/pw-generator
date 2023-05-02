
// Assignment code here
var generatePassword = function() {
    var passwordLength = window.prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.");
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please choose a number between 8 and 128.");
        return generatePassword();
    }
    var passwordLowercase = window.confirm("Would you like your password to include lowercase letters?");
    var passwordUppercase = window.confirm("Would you like your password to include uppercase letters?");
    var passwordNumbers = window.confirm("Would you like your password to include numbers?");
    var passwordSpecial = window.confirm("Would you like your password to include special characters?");
    if (passwordLowercase === false && passwordUppercase === false && passwordNumbers === false && passwordSpecial === false) {
        window.alert("Please choose at least one character type.");
        return generatePassword();
    }
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    var passwordCharacters = "";
    if (passwordLowercase === true) {
        passwordCharacters += lowercase;
    }
    if (passwordUppercase === true) {
        passwordCharacters += uppercase;
    }
    if (passwordNumbers === true) {
        passwordCharacters += numbers;
    }
    if (passwordSpecial === true) {
        passwordCharacters += special;
    }
    for (var i = 0; i < passwordLength; i++) {
        password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    }
    return password;
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


