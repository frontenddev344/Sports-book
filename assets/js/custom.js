$(document).ready(function() {
  $(".drop-down").click(function() {
      $(".sub-nav").addClass("menu-block");
  });
  $(".close-menu").click(function() {
      $(".sub-nav").removeClass("menu-block");
  });
});

$(document).ready(function() {

  $(".toggle").click(function() {
      $("header").addClass("menuToggle");
  });
  $(".close").click(function() {
      $("header").removeClass("menuToggle");
  });


  
});
$(document).ready(function() {
  $(".mb-serch").click(function() {
      $(".mobile-serch-bar").addClass("serch-block");
  });
  $(".serch-close").click(function() {
      $(".mobile-serch-bar").removeClass("serch-block");
  });
});

