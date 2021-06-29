$(function() {

  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();


    /*Fixed Header*/
    checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if ( scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


/*Smooth scroll*/

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let $this = $(this),
  blockId = $this.data('scroll'),
  blockOffset = $(blockId).offset().top;

  $("#nav a").removeClass("active");
  $this.addClass("active");

  $("html, body").animate ({
    scrollTop: blockOffset
  }, 500);
  console.log(blockOffset);
});



/*Nav toggle*/

$("#nav_toggle").on("click", function(event) {
  event.preventDefault();
$(this).toggleClass("active");
  $("#nav").toggleClass("active");
});
/*collapse*/
$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  let $this = $(this),
  blockId = $this.data('collapse');
  $(blockId).slideToggle();

  });

  /*Accordion*/
  $(document).ready(function(){
$(".accordion__header").click(function(){
    let id = this.id;   /* getting heading id */

    /* looping through all elements which have class .accordion-content */
    $(".accordion__content").each(function(){

        if($("#" + id).next().id != this.id){
            $(this).slideUp();
            $(this).next().toggle();
        }

    });
  });
});



/*Slider*/

$("[data-slider]").slick({
  ifinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1
});
  });
