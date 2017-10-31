$(document).ready(function() {
console.log("Hola");

//If table is available, show reservation form:
$(".available").on('click', function(){
  $("form").css("display","block");
});

//Exit form without submitting:
$("#exit").click(function(){
  $("form").hide();
});

//Removes "available" class, add "reserved" class to table(s):
$("button").on('click', function(){
  $("p").removeClass("available").addClass("reserved");
});

//Mouse-over available table will change cursor style and the color of table numbers:
$("p").mouseover(function(){
  $(".available").css("color", "red").css("cursor", "pointer");
});

//Table numbers will return to normal colors when mouse leaves:
$("p").mouseleave(function(){
  $(".available").css("color", "#ADAAA");
});

//On hover over reserved tables, cursor will change style:
$("p").hover(function(){
  $(".reserved").css("cursor", "not-allowed");
});

});
