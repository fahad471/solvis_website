//document.getElementById("openLinksButton").addEventListener("click", function() {
    // Define the URLs you want to open
    
 //   var link1 = "./Vielen_dank.html";

    // Open the first link in a new tab
  //  window.open(link1, "_blank");

    // Open the second link in a new tab
    
//});

// var forms = document.querySelectorAll(".needs-validation");
// Array.prototype.slice.call( forms ).forEach( function( form )
// {
//     form.addEventListener( "submit" , function( event )
//     {
//         if ( !form.checkValidity( ))
//         {
//         event.preventDefault( );
//         event.stopPropagation( );
        
//         }
//         form.classList.add( "was-validated" );
        
//     }, false);
// });
var forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener("submit", function(event) {
        if (!form.checkValidity()) {
            // Form is not valid, prevent default form submission
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Form is valid, allow default form submission
            // This will submit the form to the specified action
            
            // Your logic to perform any additional actions after submission
            // (if needed before redirection)

            // Redirect to the thank you page
            var link1 = "./Vielen_dank.html";
            


    // Open the first link in a new tab
    window.open(link1, "_blank");
    
        window.close();
    
        }

        form.classList.add("was-validated");
    }, false);
});








