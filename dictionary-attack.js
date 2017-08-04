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
  
  for (var i = 0; i < wordsList.length; i++) { // looping through the entire wordlist to check to see if pw has a match
    
    if (pw == wordsList[i]) {  // checks to see if pw matches wordsList[i], if it does, runs code below 
      alert ("That is a weak password."); // tells user the password is weak
      break; // breaks out of for loop
      
      } // to close if statement 
    
    else  {
        alert ("That is a strong password.")
      
    } // to close else statement 
    
  } // to close for loop
  
} // to close function 
