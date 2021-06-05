 $(function() {

   



/****************************************************/
var min = $('header .greenPart').innerHeight()+$('footer').innerHeight()+67
var height = $(window).innerHeight()- min 
console.log(height)
$('main').css({'min-height':height})
$('.errorPage').css({'min-height':height})

}) 