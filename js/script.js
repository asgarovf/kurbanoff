$('#owl-1').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    items:1,
})

$('#owl-1-2').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    items:1,
})


$('#owl-2').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

$('#owl-2-2').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})


$('#owl-2-3').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

$('#owl-2-4').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})


$(window).on("load",function(){
     $("#loader").fadeOut(1000);
     $("#all").fadeIn(800);
    });


$(document).ready(function(){
    

    

    $("#box_1").mouseover(function(){
        $(this).css("background","white");
        $(this).css("color","#292727");
        $(this).css("transition", "background-color 400ms linear");
    }),
    $("#box_1").mouseout(function(){
        $(this).css("background","#292727");
        $(this).css("color","white");
        $(this).css("transition", "background-color 400ms linear");
    });

    $("#box_2").mouseover(function(){
        $(this).css("background","white");
        $(this).css("color","#292727");
        $(this).css("transition", "background-color 400ms linear");
    }),
    $("#box_2").mouseout(function(){
        $(this).css("background","#292727");
        $(this).css("color","white");
        $(this).css("transition", "background-color 400ms linear");
    });

    $("#box_3").mouseover(function(){
        $(this).css("background","white");
        $(this).css("color","#292727");
        $(this).css("transition", "background-color 400ms linear");
    }),
    $("#box_3").mouseout(function(){
        $(this).css("background","#292727");
        $(this).css("color","white");
        $(this).css("transition", "background-color 400ms linear");
    });

    $("#box_4").mouseover(function(){
        $(this).css("background","white");
        $(this).css("color","#292727");
        $(this).css("transition", "background-color 400ms linear");
    }),
    $("#box_4").mouseout(function(){
        $(this).css("background","#292727");
        $(this).css("color","white");
        $(this).css("transition", "background-color 400ms linear");
    });


    $(function () {
      $(document).scroll(function () {
        var $nav = $(".nav_background");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 300);
      });
    });

    $(function () {
      $(document).scroll(function () {
        if ($(this).scrollTop() > 300) {
        $("#proj_1").fadeIn(2000);
        }
      });
    });

    $(function () {
      $(document).scroll(function () {
        if ($(this).scrollTop() > 500) {
        $("#proj_2").fadeIn(2000);
        }
      });
    });


});