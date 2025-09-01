$(document).ready(function(){
  // Fade-in cards
  $(".card").each(function(i){
    setTimeout(() => { $(this).addClass("visible"); }, i*200);
  });

  // Smooth scroll for in-page links
  $("nav a[href^='#']").on("click", function(e){
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({scrollTop: $(target).offset().top - 60}, 800);
  });
});
