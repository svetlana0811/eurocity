 $(function() {

  // menu open close
    $('.openClose').on('click', function(){
      $(this).closest('.menus').toggleClass('open')
      $(this).closest('.dashboard').toggleClass('open')
    })


    $('.categories  .elements:not(.active)').on('click' , function(){ 
      $(this).closest('.categories').find('.subcategory .elements').removeClass('active');
      $(this).closest('.categories').find('.subcategory .elements').hide();
      $(this).show();
      $(this).find('.closeSelected').show();
      $(this).addClass('active');
      $('.SubSubcats').show();
    })
    $('.SubSubcats  .elements').on('click' , function(){ 
      $(this).closest('.SubSubcats').find('.elements').removeClass('active');
      $(this).addClass('active');
      $('.mainPart .bottomPart button').addClass('active');
      $('.annousment').show();
    })
    $('.elements.active span img').on('click' , function(){
      $(this).closest('.elements').removeClass('active')
      $(this).closest('.categories').find('.subcategory .elements').show();
    })

// custom select open close
    $('.selectOption .selected').on('click' , function(){
      $(this).closest('.selectOption').toggleClass('open')
    })

    $('.mainPart .bottomPart button.full.activate ').on('click' , function(){
      $('.addvertizement').show()
      $('.third .inputs').addClass('open')
      $('.mainPart .partials .second .categories.border').removeClass('border')
      $('.annousment').addClass('border')
    })




      $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });



$(document).click(function(event) { 
  var $target = $(event.target);
  if(!$target.closest('.selectOption').length ) {
    $('.selectOption.open').removeClass('open');
  } 
    
});

$('.modals.added').click(function(event) { 
  var $target = $(event.target);
   
   if(!$target.closest('.modals.thankyou.added.open .content').length ){

    $('.modals.added').hide();
    $('.modals.added').removeClass('open');
  }       
});

  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
  });

  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });

  $('input[name="datefilternotes"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
  });

  $('input[name="datefilternotes"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#uploaded').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#uploadImage").change(function() {
  readURL(this);
  $('#uploaded').show()
    $('.mainPart .addTemplate .image label').hide()
});


  $('.openIcon').on('click' , function(){

    $('.mainPart .partials .categories').toggleClass('openIcon')
    $(this).closest('.category').toggleClass('openIcon')

  })

  $('.mainPart .right .header .walletNotLogin .notification> p').on('click' , function(){
    $('.mainPart .right .header .walletNotLogin .notification .notes').slideToggle()

  })


$('.addvertizementItem .activate button').on('click' , function(){
  $('.modals.areYouShure').show()
})
$('.modals .buttons button').on('click' , function(){
  $('.modals.areYouShure').hide()
})


$('body').delegate('.applyBtn.btn.btn-sm.btn-primary', 'click' , function(){
  var value = $('input[name="datefilter"]').attr('placeholder')
    var tag = "<p class='tag'><span class='tagVal'>"+value+"</span><span class='delete'> &times</span></p>"
  var exist = checkIfTabExist(value) 
  if(exist){
    $('.existModal').show();
    setTimeout(function(){
      $('.existModal').hide();
    }, 2000)
  } else{
    $('.tags').append(tag)
  }
})


$('.addNameOrTitle').on('keypress',function(e) {
  var value = $(this).val()
  var tag = "<p class='tag'><span class='tagVal'>"+value+"</span><span class='delete'> &times</span></p>"
    if(e.which == 13) {
          
        
       var exist = checkIfTabExist(value) 
  if(exist){
    $('.existModal').show();
    setTimeout(function(){
      $('.existModal').hide();
    }, 2000)
  } else{
    $('.tags').append(tag)
    $(this).val('')
  }
         
    }
})    


$('.filtersandItems .selectOption .hidden .item label').on('click' , function(){
  var value = $(this).text()

  var tag = "<p class='tag'><span class='tagVal'>"+value+"</span><span class='delete'> &times</span></p>"
  var exist = checkIfTabExist(value) 
  if(exist){
    $('.existModal').show();
    setTimeout(function(){
      $('.existModal').hide();
    }, 2000)
  } else{
    $('.tags').append(tag)
  }
  
})

$('body').delegate('.tags span.delete','click', function(){
  $(this).closest('p.tag').remove()
})

function checkIfTabExist(val){ 

  var ex;
   $('body').find('span.tagVal').each(function(){
  
    if($(this).text()==val){
      ex=true
       
      return false
      
    }
  }) 
  return ex
}



$('.selectCatInp').on('change', function(){
 if($('.selectCatInp.ansharj').is(':checked')) { 
    $('.selectType').addClass('active')
 } else {
   $('.selectType').removeClass('active')
 }
})


$('.typesOfAction').on('change', function(){
 if($('.typesOfAction.willchange').is(':checked')) { 
    $('.mainPart .filterSection .item.deactiveInPox').addClass('deactive')
    $('.selectType').removeClass('active')
 } else {
   $('.mainPart .filterSection .item.deactiveInPox').removeClass('deactive')
   $('.selectType').addClass('active')
 }


})



$('.mainPart .bottomPart button.part.create').on('click', function(){
  
    
    $('.added.modals ').show()
    $('.added.modals ').addClass('open')
    setTimeout(function(){
      $('.added.modals ').hide()
    }, 3000)
 
})




$('.mainPart .addTemplate .title input').on('click' , function(){
  var src= $(this).closest('.addTemplate').find('.image').find('img').attr('src')
 
  var text= $(this).val()
  $('.openAddvertizement .addTemplate img').attr('src' , src)
  $('.openAddvertizement .addTemplate p').html(text)
  $('.openAddvertizement').show()
})

$('.openAddvertizement .close').on('click' , function(){
  
  $('.openAddvertizement .addTemplate img').attr('src' , '')
  $('.openAddvertizement .addTemplate p').html('')
  $('.openAddvertizement').hide()
})

})

 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 200;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};