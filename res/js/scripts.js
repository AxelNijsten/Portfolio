$(document).on('click','.goToSection',function(e){
    $('html, body').animate({
        scrollTop: $($(this).attr('data-href')).offset().top
    }, 1000);//set second as required
})