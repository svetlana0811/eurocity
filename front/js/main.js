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

  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    
    // autoplay: true,
    dots: false,
    // loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 7,
    dots: false,
    // loop:true,
    nav: false,
    navText: [
     '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 1,
    responsiveRefreshRate: 100
  })
     
$('.modal.thankYou .message button').on('click', function() {
    $('.modal').hide()
})
  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    console.log(el);
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
 
     
  }

  

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
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