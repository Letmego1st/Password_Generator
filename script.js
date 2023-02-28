// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Write Password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}

function generatePassword() {
  var pLength = parseInt(prompt("Enter Password length(8-126)"))
  if (pLength < 8 || pLength > 128 || isNaN(pLength)) { // OR condition if plength <8 or plength > 126 or plength is not nuber
    return "Enter valid Password length"
  }
  var upperYes = confirm("Do you like Uppercase letters in your password? ") // true or false
  var lowerCase = confirm("Do you like Lowercase letters in your password? ")
  var numbers = confirm("Do you like numbers letters in your password? ")
  var symbols = confirm("Do you like symbols letters in your password? ")
  if(!upperYes && !lowerCase && !numbers && !symbols){ // AND all choices are false
    return  "Choose valid option either lowercase or uppercase or numbers"
  
  }
  var choices = ""
  if(upperYes){
    choices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(lowerCase){
    choices += "abcdefghijklmnopqrstuvwxyz"
  }
    if(numbers){
      choices += "0123456789"
    }
    if(symbols){
      choices += "!@#$%^&*()==[[[}}"
    }
  
if (choices.length==0) {
  alert("at least one character type should selected")
  }
  else{
    let psw="";
    let index=0;
    let randomchar;
    for(let i=0; i<pLength; i++){
      index=Math.floor(Math.random() * choices.length);
      randomchar=choices[index];
      psw += randomchar;
    }
    return psw;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


