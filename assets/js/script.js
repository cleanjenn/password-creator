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
let confirmSpecChar;
let confirmUpper;
let confirmLower;
let confirmNumber; 
let pwdChars = [];

// function to promt for password criteria
let generatePassword = function() {
    confirmLength = window.prompt('How many characters do you want to have?');

    //alert for password to contain 8 - 128 characters 
    if ((confirmLength <= 7) || (confirmLength >= 129)) {
        window.alert('Password must include a length of atleast 8 - 128 characters');
        //repeat confirm question
        confirmLength();
    }
    window.alert(`Your password will have ${confirmLength} characters`);
    
    confirmSpecChar = window.confirm('Would you like to use special characters?');
    if (confirmSpecChar === true) {
        pwdChars = [...pwdChars, ...pwdInput.specialChar];
    } else {
        pwdChars= [...pwdChars]; 
    };

    confirmUpper = window.confirm('Would you like to use upper case letters?');
    if (confirmUpper === true) {
        pwdChars = [...pwdChars, ...pwdInput.uppercase];
    } else {
        pwdChars= [...pwdChars]
    }

    confirmLower = window.confirm('Would you like to use lower case letters?');
    if (confirmLower === true) {
        pwdChars = [...pwdChars, ...pwdInput.lowercase];
    } else {
        pwdChars= [...pwdChars]
    }

    confirmLower = window.confirm('Would you like to use numbers?');
    if (confirmNumber === true) {
        pwdChars = [...pwdChars, ...pwdInput.number];
    } else {
        pwdChars= [...pwdChars]
    };
    //password selection created into string
    let randPwd = "";
    //for loop to generate password
    for (let i = 0; i < confirmLength; i++) {
        randPwd = randPwd + pwdChars[Math.floor(Math.random() * pwdChars.length)];
    }
    // return the password to generate
    return randPwd;

};
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
