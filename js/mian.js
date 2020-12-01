
$('.days button.btn').on('click', function(){
    $(this).addClass('is-active');
    $(this).siblings().removeClass('is-active');
    
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl: true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
})