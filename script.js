//document.getElementById("openLinksButton").addEventListener("click", function() {
    // Define the URLs you want to open
    
 //   var link1 = "./Vielen_dank.html";

    // Open the first link in a new tab
  //  window.open(link1, "_blank");

    // Open the second link in a new tab
    
//});
//////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//   const loadingScreen = document.getElementById("loading-screen");

//   // Intercept form submission
//   document.getElementById("myForm").addEventListener("submit", function() {
//       // Show loading screen
//       loadingScreen.style.display = "flex"; // or "block" depending on your styling

//       // Submit the form
//       // Note: If you are using AJAX to submit the form, handle the loading screen in the AJAX success callback.

//       // Example: Simulate form submission for testing
//       setTimeout(function() {
//           // Hide loading screen after a delay (e.g., 3 seconds)
//           loadingScreen.style.display = "none";

//       }, 4000); // Adjust the delay as needed
//   });
// });
///////////////////////////////////////////////////////////////////////////////////
var forms = document.querySelectorAll(".needs-validation");
Array.prototype.slice.call( forms ).forEach( function( form )
{
    form.addEventListener( "submit" , function( event )
    {
        if ( !form.checkValidity( ))
        {
        event.preventDefault( );
        event.stopPropagation( );
        
        }
      else {
        // Form is valid, you can add your redirection logic here
        window.location.href = './Vielen_dank.html';
    }
        
      //    else{
      //     window.location.href = './Vielen_dank.html';
      //   fetch('https://script.google.com/macros/s/AKfycbyP3GyGihmsomAb-rFGfa4W5UiruQ6vkJ3YsnKzXj1h55v9XUhhPwJQCZ6HhohJgmEK/exec', {
      //     method: 'POST',
      //     body: new FormData(event.target),
      //   })
        
      //   .then(response => response.json())
      //   .then(data => {
          
      //     // Handle the response
      //     if (data.result === 'success') {
      //       // Redirect to the specified URL
          
           
      //         window.location.href = './Vielen_dank.html';
    
          
            
      //     } else {
      //       console.error('Form submission failed:', data.error);
      //     }
      //   })
      //   .catch(error => console.error('Error:', error));
        
      // }
      form.classList.add( "was-validated" );
      
    });
    
      
    
        
    }, false);
    ///////////////////////////////////////////////////////////////////
   

// });
// var forms = document.querySelectorAll(".needs-validation");

// Array.prototype.slice.call(forms).forEach(function(form) {
//     form.addEventListener("submit", function(event) {
//         if (!form.checkValidity()) {
//             // Form is not valid, prevent default form submission
//             event.preventDefault();
//             event.stopPropagation();
//         } else {
//             // Form is valid, allow default form submission
//             // This will submit the form to the specified action
            
//             // Your logic to perform any additional actions after submission
//             // (if needed before redirection)

//             // Redirect to the thank you page
//             document.getElementById('myForm').addEventListener('submit', function(event) {
//               event.preventDefault();  // Prevent the default form submission behavior
          
//               // Use fetch to submit the form data to the Google Apps Script
//               fetch('https://script.google.com/macros/s/AKfycbyyiVf90cpJ9qOI5Q8ZH3fYFkvZDfXM3ZctXnYYDNJVsu0de7xrrz_mLm0l9aWCJcoF/exec', {
//                 method: 'POST',
//                 body: new FormData(event.target),
//               })
//               .then(response => response.json())
//               .then(data => {
//                 // Handle the response
//                 if (data.result === 'success') {
//                   // Redirect to the specified URL
//                   window.location.href = data.link;
//                 } else {
//                   console.error('Form submission failed:', data.error);
//                 }
//               })
//               .catch(error => console.error('Error:', error));
//             });
           
    
    
//         }

//         form.classList.add("was-validated");
//     }, false);
// // });''
// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent the default form submission behavior

//     // Use fetch to submit the form data to the Google Apps Script
//     fetch('https://script.google.com/macros/s/AKfycbyP3GyGihmsomAb-rFGfa4W5UiruQ6vkJ3YsnKzXj1h55v9XUhhPwJQCZ6HhohJgmEK/exec', {
//       method: 'POST',
//       body: new FormData(event.target),
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Handle the response
//       if (data.result === 'success') {
//         // Redirect to the specified URL
//         window.location.href = './Vielen_dank.html';
//       } else {
//         console.error('Form submission failed:', data.error);
//       }
//     })
//     .catch(error => console.error('Error:', error));
//   });
//   document.addEventListener("DOMContentLoaded", function() {
//   const loadingScreen = document.getElementById("loading-screen");

//   // Intercept form submission
//   document.getElementById("myForm").addEventListener("submit", function() {
//       // Show loading screen
//       loadingScreen.style.display = "flex"; // or "block" depending on your styling

//       // Submit the form
//       // Note: If you are using AJAX to submit the form, handle the loading screen in the AJAX success callback.

//       // Example: Simulate form submission for testing
//       setTimeout(function() {
//           // Hide loading screen after a delay (e.g., 3 seconds)
//           loadingScreen.style.display = "none";
//       }, 4000); // Adjust the delay as needed
//   });
// });






