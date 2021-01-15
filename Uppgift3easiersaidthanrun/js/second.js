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
       




// Firstly we need to get the address of the site the code is running from (in this case hackingNews.html)
let currentAddress = window.location.href;
// Which will show as a string in the console.
console.log(currentAddress);


// Secondly, we want to retrieve the address, or URL (Uniform Resource Locator)
// Here's how to get that..
let currentURL = new URL(window.location.href);

// The console will here show some extra stuff
console.log(currentURL);

// one of the extras is "search"
console.log(currentURL.search);
// this will show everything that is located behind "?" in the URL which will look like: ?username=Ronny&password=Ronny&login=Login&persistent=1 
// Which basically shows the username as 'Ronny' with also the password being 'Ronny' and that the login has passed the variables we put before it at the first page.

// Now that we have this info, we can create something useful from it

// URLSearchParams is a way to get form data like this
// its named HTTP GET method
// URLSearchParams let us get the data we need from the 'currentURL' 
var searchParams = new URLSearchParams(currentURL.search);


// This will allow us to "get" the form data from the forms input: username
let fname = searchParams.get("username");
// That data we will print as a new variable called fname
console.log(fname);

// And lastly show that new variable on our html page under "account" which is located in the top right of the page. 
document.getElementById("account").innerHTML = "Your name is: " + fname;








       
// NEW FUNCTION!
//"SHOWING MESSAGES IN CONSOLE JUST FOR FUN WHEN LOGGING IN" (part 2, see index.js for part 1)

// introducing dialog with sleep-timer to get a conversation effect
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

  var d = new Date();
  
  console.log("\nAuthenticating, please hold...");
  user = fname;
  wait(1500)
    //Makes JS sleep for 500 miliseconds and then say hello
    
  //a bit longer sleep (1500 MS) before console "confirms" the user
  console.log("    -Hello " + user + "!\n");
  wait(1500)

  console.log("The date is: " + d.toDateString());

  console.log("The time as of now is: " + d.toTimeString());
  wait(1500)
  console.log("     -And I must say you particularly handsome at this moment @(O_o)@\n");
// OBS! This may cause the webpage to experience longer load times!

// NEW FUNCTION!
// AGE-BUTTON 1 i.e "OK"
function ageOk()
// if the over-age of 18-button is clicked send alert:
{
alert("You can proceed");	
}


// AGE-BUTTON 2 i.e "not ok"
function ageAlert()
// if the not-over-age of 18-button is clicked send alert:
{
alert("You should not proceed if under the age of 18");	
}







