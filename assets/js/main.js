// JavaScript Document
(function($){
"use strict";
	/*----------sticky header script----------*/
	 /*$(window).on('scroll',function() {    
	   var scroll =  $(window).scrollTop();
	   if (scroll < 20) {
		$("#sticky-menu").removeClass("sticky");
	   }else{
		$("#sticky-menu").addClass("sticky");
	   }
	  }); */
	
	/*----------sticky header script----------*/
	
	
	$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	
	
	
	/*----------slider  script----------*/
	$('.slider-active').owlCarousel({
    loop:true,
	
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	autoplay:true,
        
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    
   
        
    nav:true,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


/*----------Smooth scroll  script----------*/



  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


/*----------page top  script----------*/

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $("#page-top").addClass("page-top-visible");
        //alert('aaa');
    }else{
        //clearHeader, not clearheader - caps H
        $("#page-top").removeClass("page-top-visible");
        //alert('aaa');
    }
}); //missing );


    




}) (jQuery);
