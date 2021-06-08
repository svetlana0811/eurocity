 $(function() {
/****************************************************/
var min = $('header .greenPart').innerHeight()+$('footer').innerHeight()+67
var height = $(window).innerHeight()- min 
console.log(height)
$('main').css({'min-height':height})
$('.errorPage').css({'min-height':height})


$(".accordion__title.active").next().slideDown();
$(".accordion__title").on("click", function () {
  if( $(this).hasClass('active') ) {
        $(this).removeClass("active").next().slideUp();
    } else {
        $(".accordion__title.active").removeClass("active").next(".accordion__body").slideUp();
    $(this).addClass('active').next('.accordion__body').slideDown();
    }
});

   
$(".owl-carousel.regions ").owlCarousel({
    
    loop:false,
    dots:false,
   nav:true,
    
    autoplay:false,
 
   
    responsive : {
      
        0 : {
            items: 1,
             
        },
         
        768 : {
            items: 2,
          
        },
        1100: {
          items: 3, 
        }  ,
        1366: {
          items: 5, 
        }  
        
    }, 
  }); 
$(".owl-carousel.testimonials ").owlCarousel({
    
    loop:false,
    dots:false,
   nav:true,
     items: 1,
    autoplay:false,
 
 
  }); 
 


}) 