document.getElementById("openLinksButton").addEventListener("click", function() {
    // Define the URLs you want to open
    
    var link1 = "./Vielen_dank.html";

    // Open the first link in a new tab
    window.open(link1, "_blank");

    // Open the second link in a new tab
    
});

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
        form.classList.add( "was-validated" );
    }, false);
});


