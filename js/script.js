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
    margin:0,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:4000,
})

$('#owl-2-2').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:4000,
})

$(document).ready(function(){
    $("body").fadeIn(800)

    $("#box_1").mouseover(function(){
        $(this).css("background","#463810");
        $(".box_title_1").css("color","white");
        $(".box_text_1").css("color","white");
    }),
    $("#box_1").mouseout(function(){
        $(this).css("background","#efefef");
        $(".box_title_1").css("color","#5c3b10");
        $(".box_text_1").css("color","black")
    });

    $("#box_2").mouseover(function(){
        $(this).css("background","#463810");
        $(".box_title_2").css("color","white");
        $(".box_text_2").css("color","white")
    }),
    $("#box_2").mouseout(function(){
        $(this).css("background","#efefef");
        $(".box_title_2").css("color","#5c3b10");
        $(".box_text_2").css("color","black")
    });

    $("#box_3").mouseover(function(){
        $(this).css("background","#463810");
        $(".box_title_3").css("color","white");
        $(".box_text_3").css("color","white")
    }),
    $("#box_3").mouseout(function(){
        $(this).css("background","#efefef");
        $(".box_title_3").css("color","#5c3b10");
        $(".box_text_3").css("color","black")
    });

    $("#box_4").mouseover(function(){
        $(this).css("background","#463810");
        $(".box_title_4").css("color","white");
        $(".box_text_4").css("color","white")
    }),
    $("#box_4").mouseout(function(){
        $(this).css("background","#efefef");
        $(".box_title_4").css("color","#5c3b10");
        $(".box_text_4").css("color","black")
    });

    $("#box_1").hover(function(){
        $(this).animate({bottom:"10px",});
        $(this).animate({top:"0px",});
    });
    $("#box_2").hover(function(){
        $(this).animate({bottom:"10px",});
        $(this).animate({top:"0px",}); 
    });
    $("#box_3").hover(function(){
        $(this).animate({bottom:"10px",});
        $(this).animate({top:"0px",});
    });
    $("#box_4").hover(function(){
        $(this).animate({bottom:"10px",});
        $(this).animate({top:"0px",});
    });


    $(function () {
      $(document).scroll(function () {
        var $nav = $(".nav_background");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 300);
      });
    });

    $(function () {
      $(document).scroll(function () {
        if ($(this).scrollTop() > 180) {
        $("#proj_1").slideDown(1000);
        }
      });
    });

    $(function () {
      $(document).scroll(function () {
        if ($(this).scrollTop() > 600) {
        $("#proj_2").slideDown(1000);
        }
      });
    });

    $("#messageNav").click(function(){
        $("#message").slideDown(1000);
    });

    $(function () {
      $(document).scroll(function () {
        if ($(this).scrollTop() > 1100) {
        $("#message").slideDown(1000);
        }
      });
    });
});