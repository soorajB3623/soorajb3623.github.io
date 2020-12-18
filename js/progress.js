//Loading spinner 
$(window).on("load", function(){    
    $('.wrapper-spinner').fadeOut('slow', function () {
    });
});

//Skill bar
        $(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});