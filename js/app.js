$(document).ready(function(){
   
 })



$(".menu-button").click(function(){

    $(".3linemenu").toggleClass("feather-minimize-2")
})

$(function() {
    $("li").click(function() {
       // remove classes from all
       $("li").removeClass("act");
       // add class to the one we clicked
       $(this).addClass("act");
    });
 });
 let screenHeight = window.innerHeight;
//  console.log(screenHeight);


 $(window).scroll(function () {
     let currentPosition = $(this).scrollTop();
    //  console.log(currentPosition);
     if(currentPosition >screenHeight-20){
         $(".site-nav").addClass("site-nav-scroll ");
     }else{
         $(".site-nav").removeClass("site-nav-scroll ");
        
     }
 });
 
    $(window).on("load",function () {
        $('.loader-container').fadeOut(500,function () {
            $(this).remove();
        });
    });
