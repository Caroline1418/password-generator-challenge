//special characters array
var specialChar = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ']', '[', '}','{', '\\', "'", ';', ':', '~', '`', '.', '<', '>', '/', '?',
]
//numbers array
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
//lower cased characters array
var lowerCasedChar = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]
//upper cased characters array
var upperCasedChar = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
]
//function for password questions
function getPasswordChoices(){
    var length = parseInt(
        prompt("How many characters would you like your password to contain?")
    );

    if(isNaN(length) === true){
        alert("Please use a number.");
        return;
    }
    //check if password has enough characters
    if(length < 8){
        alert("password length must be at least 8 characters");
        return;
    }
    //check if password has too many characters
    if(length > 128){
        alert("Password can not exceed 128 characters");
        return;
    }

    //prompt to include special char
    var hasSpecialChar = confirm(
        "Include Special Characters?"
    );

    //prompt to include numeric Char
    var hasNumericChar = confirm(
        "Include numbers?"
    );

    //prompt to include upper case letters
    var hasUpperCaseChar = confirm(
        "Include upper case letters?"
    );

    //prompt to include lower case char
    var hasLowerCaseChar = confirm(
        "Include lower case letters?"
    );

    //checking to see if a user does not include characters
    if(
        hasSpecialChar === false &&
        hasNumericChar === false &&
        hasUpperCaseChar === false &&
        hasLowerCaseChar === false
    )
    {
        alert("You must choose at least one character type.");
        return;
    }

    var passwordChoices = {
        length,
        hasLowerCaseChar,
        hasNumericChar,
        hasSpecialChar,
        hasUpperCaseChar
    };
    return passwordChoices;
}

//function to get random char
function getRandom(arr){
    var randoIndex = Math.floor(Math.random() * arr.length);
    var randoEl = arr[randoIndex];
    return randoEl;
}

//function to get password
function generatePass(){
    var choices = getPasswordChoices();
    var result = [];
    var possChar = [];
    var guarChar = [];

    //if statements to add array items 
    if(choices.hasSpecialChar){
        possChar = possChar.concat(specialChar);
        guarChar.push(getRandom(specialChar));
    }

    if(choices.hasNumericChar){
        possChar = possChar.concat(numericChar);
        guarChar.push(getRandom(numericChar));
    }

    if(choices.hasUpperCaseChar){
        possChar = possChar.concat(upperCasedChar);
        guarChar.push(getRandom(upperCasedChar));
    }

    if(choices.hasLowerCaseChar){
        possChar = possChar.concat(lowerCasedChar);
        guarChar.push(getRandom(lowerCasedChar));
    }
    //for loop to select random array values
    for( var i = 0; i < choices.length; i++ ){
        result.push(possChar);
    }

    for(var i = 0; i < guarChar.length; i++){
        result[i] = guarChar[i];
    }
    //make password from a string
    return result.join('');
} 

var genBtn = document.querySelector('#generate');

function writePass(){
    var password = generatePass();
    var passText = document.querySelector('#password');
    passText.value=password;
}

//generate password on click
genBtn.addEventListener('click', writePass);
