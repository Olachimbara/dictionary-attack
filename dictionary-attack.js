var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  
  var pw = document.getElementById("pw").value; // creating a variable pw and copying value of "pw" into it
  
  var t = 0;  // creating a variable t that is equal to 0 

  for (var i = 0; i < wordsList.length; i++) { // looping through the entire wordlist to check to see if pw has a match
    
    if (pw == wordsList[i]) {  // checks to see if pw matches wordsList[i], if it does, runs code below 
      alert ("That is a weak password."); // tells user the password is weak
      t = 1;  //  changing the variable t to equal 1 
      break; // breaks out of for loop
      
      } // to close if statement 
    
  } // to close for loop
  
  if (t == 0) { //  checks to see if variable t is equal to 0 (would be 0 only if first if statement didnt run, ie. no match)
             // , if it is then alert user that password is strong 
    alert ("That is a strong password.")
    
  } // closes this if statement 
  
} // to close function 
