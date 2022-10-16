


        /*Shows message-me form on click of button*/
      /*  function showForm() {
            document.getElementById('shownForm').style.display = "block";
         } --If you only want to show form and not hide it use this*/ 

         function showForm() {
            var x = document.getElementById("shownForm");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }

