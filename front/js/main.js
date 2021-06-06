 $(function() {

   
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


/****************************************************/
var min = $('header .greenPart').innerHeight()+$('footer').innerHeight()+67
var height = $(window).innerHeight()- min 
console.log(height)
$('main').css({'min-height':height})
$('.errorPage').css({'min-height':height})

}) 