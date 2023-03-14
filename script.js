// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "1,2,3,4,5,6,7,8,9,0";
var uppercaseL = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"; 
var lowercaseL = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var specialChar = "!,@,#,$,%,^,&,*,?,";


// Write password to the #password input
// step 1. prompt to choose password length 8-128 characters
// step 2. prompt for character types
    // numbers, uppercase, lowercase, special characters
// step 3. confirm each of these choices
// step 4. generate password in alert or in the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 function generatePassword(){
  passwordChar = ""
 
  var passwordLength = prompt( "How Many Characters Would You Like For Your Password? You Must Choose Between 8-25 characters.");
  if (passwordLength <8) {
    alert("Your Password Must be At Least 8 Characters Long");
    return;
 }
  
 if (passwordLength > 25) {
  alert("Too Many! 25 or Less Please");
return;
}
  
  var numbers = prompt( "Would You Like To Use Numbers?")
  confirm
  var uppercaseL = prompt( "Would You Like To Use Uppercase Letters?")
  confirm
  var lowercaseL = prompt( "Would You Like To Use Lowercase Letters?")
  confirm
  var specialChar = prompt( "Would You Like To Use Special Characters?")
  confirm
  


 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
