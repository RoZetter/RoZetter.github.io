// // SCROLLED HEADER
window.addEventListener('scroll', function () {
   document.body.classList[
   window.scrollY > 20 ? 'add': 'remove'
  ]('scrolled');
  });

    // MOBILENAVIGATION
    function myFunction() {
        var x = document.getElementById("header");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
	  
      // COOKIEBANNER
      function closeS() {
        var x = document.getElementById("cookieBanner");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
	 

// CREATE A COOKIE FROM USERNAME-INPUT AND PLACE IT ON FRONT PAGE. 
// PART 1 (SEE HACKINGNEWS.JS FOR PART 2)
window.onload=function()
{
	var userName = document.getElementById('userName').value;
	var button = document.getElementById('submit');
	button.onclick = function()
	{
		setCookie('userName',userName,1);
		window.location.href="hackingNews.html";
	}
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
}



	  
// LOGIN-function
var attempt = 3;
var logInCount = 1;
var loginUser = "ronny";
var loginPassword = "ronny";
// on submit register username and password
function checkLogin() {
	var userName = document.getElementById("userName").value;
	var passWord = document.getElementById("passWord").value;
	console.log(userName);
	console.log(passWord);
	//checking if the user is below the max number of attempts
	 if (logInCount <= attempt) {
	console.log("check number of attempts");
		// Check if the username is correct
		if (userName != loginUser || passWord != loginPassword) {
			//create a variabel to hold the number of attempts left
			attempt--;
			console.log(attempt);
			console.log(userName);
			console.log(passWord);

			//show message if input was incorrect
			document.getElementById("loginStatus").innerHTML = "Incorrect username or password. <br> You have " + attempt + " attempt(s) remaining!";
			document.getElementById("loginStatus").style.color = "white";
			document.getElementById("loginStatus").style.fontsize = "28px";
			
			
			// if failed password check update the logInCount
			logInCount++;

				if(attempt == 0){
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
				}
			// disables the submit action
			return false;			
			 } else {
			 console.log("true");
				// if there is an input, "return true" i.e so the submit action happens
				return true;
			}

	} else {
		// if the user has no attempts remaining show message
		// message out of attempts
		document.getElementById("loginStatus").innerHTML = "Out of attempts." + " Please refresh and try again. <br>" + "(User: 'ronny' Pass: 'ronny')";
		document.getElementById("loginStatus").style.color = "white";
		return false;
	}
}





