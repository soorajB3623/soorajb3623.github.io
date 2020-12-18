
//navbar scroll animation
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

//mobile mode navtrigger
$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

//mobile navtrigger closing
$('.navlinks a').click(function(){
    $("#mainListDiv").removeClass('show_list');
    $("#mainListDiv").fadeIn();
    $('.navTrigger').toggleClass('active');
});
