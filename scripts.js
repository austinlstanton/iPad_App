//Document Ready

$( document ).ready(function() {
    
    $( document ).on(
    "click",
    "a",
    function( event ){
 
        // Stop the default behavior of the browser, which
        // is to change the URL of the page.
        event.preventDefault();
 
        // Manually change the location of the page to stay in
        // "Standalone" mode and change the URL at the same time.
        location.href = $( event.target ).attr( "href" );
 
    }
);
   
/* Popover Menu Div */
  
   $('.popover-with-html').popover({ 
    html : true,
    animation: false,
    placement: 'top',
    container: '.wrapper',
    content: function() {
      return $('#menu-list').html();
    }
  });
  
  
/*  $('.slide').click(function () {
       $( "#colliers_numbers" ).slideToggle( "fast", function() {
    // Animation complete.
  });
*/
  

  
//Transition Effects from http://www.onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/

 /*  $("body").css("display", "none");
 
    $("body").fadeIn(2000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(100, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
    */
  
  
});
//End Document Ready