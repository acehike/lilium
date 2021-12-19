/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona.

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/
//Page scrolling snippet (http://codepen.io/tobiasdev/pen/qNdrBZ):
$(function(){
  $('a[href^="#"]:not([href="#"])').click(function(){
    $("html, body").animate({
      //IMPORTANT: One extra pixel to pass the line!
      scrollTop: $($(this).attr("href")).position().top + 1
    }, 500);
    return false;
  });
});

//Set line width and position:
function setLine(tab){
  var tabWidth = $(tab).outerWidth();
  var tabPos = $(tab).position();
  $(".indicator-line").css({
    "width": tabWidth,
    "left": tabPos.left
  });
};

//Line move:
function lineMove(){
  $('.tab').each(function (){
    var scrollPos = $(document).scrollTop();
    var linkRef = $($(this).attr("href"));
    var refPos = linkRef.position().top;
    var refHeight = linkRef.height();
    if(refPos <= scrollPos && refPos + refHeight > scrollPos){
      $('.tab').removeClass("active-tab");
      $(this).addClass("active-tab");
      setLine(this);
    };
  });
};

//Run function:
$(document).ready(function(){
  //On document load:
  lineMove();
  //On window scroll or resize:
  $(window).on("scroll resize", lineMove);
});
