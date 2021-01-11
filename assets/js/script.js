// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

//password criteria for characters
let pwdInput = {
    lowercase: ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    number: ["0","1","2","3","4","5","6","7","8","9"],
    specialChar: [" ", ".", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "^", ",", ":", ";", "<", ">", "=", "?", "@", "[", "]", "|", "{", "}", "_", "`"]
};

//variables for password criteria prompt
let confirmLength = "";
let pwdChars = [];

// function to promt for password criteria
let generatePassword = function() {
    confirmLength = window.prompt('How many characters do you want to have?');
    //alert for password to contain 8 - 128 characters 
    if ((confirmLength <= 7) || (confirmLength >= 129)) {
        window.alert('Password must include a length of atleadt 8 - 128 characters');
        //repeat confirm question
        confirmLength();
    }
    window.alert(`Your password will have ${confirmLength} characters`);
};
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
