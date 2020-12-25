$(function(){

    $(".fab").mouseenter(function(){

        $(this).css("transform","scale(1.2)");
        $(this).css("transition", "0.5s");
    });

    $(".fab").mouseleave(function () {

        $(this).css("transform", "scale(1.0)");
    });

    $(".fas").mouseenter(function () {

        $(this).css("transform", "scale(1.2)");
        $(this).css("transition", "0.5s")
    });

    $(".fas").mouseleave(function () {

        $(this).css("transform", "scale(1.0)");
    });

});