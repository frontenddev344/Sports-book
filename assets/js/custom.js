$(document).ready(function(){
    $(".drop-down").click(function(){
      $(".sub-nav").addClass("menu-block");
    });
    $(".close-menu").click(function(){
      $(".sub-nav").removeClass("menu-block");
    });
  });