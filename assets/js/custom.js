(function($){
"use strict";

/* Common Page Slider */	
	
$(document).ready(function() {
    $('.page-slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: false,
        pauseOnHover: true 
    });
});


/* Modal Popup Slider */
		
		 $(document).ready(function() {
            $('.modal-slider').slick({
                dots: true,             
                infinite: false,        
                speed: 2000,            
                slidesToShow: 3,        
                slidesToScroll: 1,     
                autoplay: true,      
                autoplaySpeed: 2000, 
                pauseOnHover: true,				
                arrows: false,
responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]				
            });
        });
		

/* On Click Popup */
	
     $('#FortModal, #HolipuraModal, #Trail, #Jeep, #River, #BateshwarModal, #safarinature, #Bhareh, #Etawah, #Rapri, #BicycleHighway, #Bijkouli, #ShouriJain, #VillageWalk').on('shown.bs.modal', function () {
    $('.popup-slider').not('.slick-initialized').slick({
        dots: true,             
        infinite: true,        
        speed: 2000,            
        slidesToShow: 3,        
        slidesToScroll: 1,     
        autoplay: true,      
        autoplaySpeed: 2000,  
        arrows: false,
		pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.popup-slider').slick('setPosition');
});


/* Factsheet Icon Slider */
		
$(document).ready(function() {             
    $('.icon-slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
		pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

	


	
})(this.jQuery);