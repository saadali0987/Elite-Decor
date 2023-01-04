$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('nav').toggleClass('nav-toggle')
    })

    $(window).on('scroll load', ()=>{
        $('.fa-bars').removeClass('fa-times')
        $('nav').removeClass('nav-toggle')
    })
})