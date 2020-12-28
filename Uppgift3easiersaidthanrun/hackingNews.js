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



// CREATE A COOKIE FROM USERNAME-INPUT AND PLACE IT ON FRONT PAGE. 
// PART 2 (SEE INDEX.JS FOR PART 1)

window.onload = function()
{
	var userName = getCookie('userName');
	var span = document.getElementById('cookieSpan');
    span.innerHTML="Welcome "+userName;
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    }
  }
return "";
}

