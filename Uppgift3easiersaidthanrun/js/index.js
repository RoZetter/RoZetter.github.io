// NEW FUNCTION!
// "scrolled header"
window.addEventListener('scroll', function () {
	document.body.classList[
	window.scrollY > 20 ? 'add': 'remove'
   ]('scrolled');
   });



   	// NEW FUNCTION!
	// mobilnavigation
	 function myFunction() {
		 var x = document.getElementById("header");
		 if (x.className === "topnav") {
		   x.className += " responsive";
		 } else {
		   x.className = "topnav";
		 }
	   }
	   


	   // NEW FUNCTION!
	   // COOKIEBANNER!
	   function closeS() {
		 var x = document.getElementById("cookieBanner");
		 if (x.style.display === "none") {
		   x.style.display = "block";
		 } else {
		   x.style.display = "none";
		 }
	   }
	

// NEW FUNCTION!	  
// "Login-function"
// 1st, we declare variables, in this case, attempts which is how many attempts a user has to try and log in.
let attempts = 3;
// 2nd, logInCount, which gets increased by 1 for every "attempts"
let Count = 1;
// 3rd, we have 2 declared variables for what the correct username or "loginUser" and password "loginPassword"
let loginUser = "Ronny";
let loginPassword = "Ronny"
	   

	   // Now we create a function which on submit, registers username and password
	   // this is what is called from the onsubmit from the form i.e when pushing the "login"-button
	   function checkPass() {
	   
		   // lets get what ever is in the form for password
		   let userName = document.forms["login_form"]["username"].value;
		   let passWord = document.forms["login_form"]["password"].value;
		   // note that we need both the forms name and the name of the input tha we want to get
	   
		   //Here we check if the user is below or above the max number of attempts
		   if (Count <= attempts) {
	   
			   // Check if the username and password are correct
			   if (passWord != loginPassword || userName != loginUser) {
				   console.log(Count);

				   //create a variabel to hold the number of attempts left
				   var attemptsLeft = 4 - Count;
	   

				   		//show this message if input was incorrect
					document.getElementById("loginStatus").innerHTML = "Incorrect username or password. <br> You have " + attemptsLeft + " attempt(s) remaining!";
					document.getElementById("loginStatus").style.color = "white";
	   
				   // if the user typed in a failed password or username the Count gets updated
				   Count++;
	   
				   // then return false, so that the submit action wont run
				   return false;
			   } else {
				   // if there is an accepted input, "return true" i.e the credentials are submitted.
				   return true;
			   }
	   
		   } else {
		// if the user has no attempts remaining show message to the attemptee
		document.getElementById("loginStatus").innerHTML = "Out of attempts." + " Please refresh and try again. <br>" + "(User: 'Ronny' Pass: 'Ronny')";
		document.getElementById("loginStatus").style.color = "white";
			   return false;
	   
		   }
	   }










// NEW FUNCTION!
//"SHOWING MESSAGE IN CONSOLE JUST FOR FUN WHEN LOGGING IN" (part 1, see second.js for part 2)
console.log("Welcome!\n\nEnter user and password to begin login-process:");





// NEW FUNCTION!
// PROGRESSBAR!
var progress = document.getElementById('progressbar');
var totalHeight = document.body.scrollHeight - window.innerHeight; 
window.onscroll = function() 
{
var progressHeight = (window.pageYOffset / totalHeight) * 100; 
progress.style.height = progressHeight + "%"; 
}

