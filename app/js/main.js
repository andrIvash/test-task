(function(){

  var numberItem = $('.course').length,
      label = $('.course__label'),
      wrapper = $('.study');
    
 label.on('click', function(e){
    var elem = $(e.target),
      course = elem.closest('.course'),
      overlay = course.find('.course__hover');
    
    overlay.animate({
      height: "+=100%"
    }, 1000);

    setTimeout(function(){
      course.remove();
      numberItem --;

     if(numberItem == 0 ) {
      wrapper.append("<div class='study__item_msg'>&#10004; Задание выполнено </div>");
      }
      
    }, 1000);
  
  })
 
  
})();