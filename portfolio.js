$(document).ready(function () {
  $(".cup-html").mouseover(function () {
    $(".cup-html ul").addClass("slide-up");
    $(".cup-html ul").removeClass("slide-down");
    $(".cup-html h1").addClass("heading-slide-up");
    $(".cup-html h1").removeClass("heading-slide-down");
  });
  $(".cup-html").mouseout(function () {
    $(".cup-html ul").addClass("slide-down");
    $(".cup-html ul").removeClass("slide-up");
    $(".cup-html h1").addClass("heading-slide-down");
    $(".cup-html h1").removeClass("heading-slide-up");
  });

  $(".cup-css").mouseover(function () {
    $(".cup-css ul").addClass("slide-up");
    $(".cup-css ul").removeClass("slide-down");
    $(".cup-css h1").addClass("heading-slide-up");
    $(".cup-css h1").removeClass("heading-slide-down");
  });
  $(".cup-css").mouseout(function () {
    $(".cup-css ul").addClass("slide-down");
    $(".cup-css ul").removeClass("slide-up");
    $(".cup-css h1").addClass("heading-slide-down");
    $(".cup-css h1").removeClass("heading-slide-up");
  });
  $(".cup-javascript").mouseover(function () {
    $(".cup-javascript ul").addClass("slide-up");
    $(".cup-javascript ul").removeClass("slide-down");
    $(".cup-javascript h1").addClass("heading-slide-up");
    $(".cup-javascript h1").removeClass("heading-slide-down");
  });
  $(".cup-javascript").mouseout(function () {
    $(".cup-javascript ul").addClass("slide-down");
    $(".cup-javascript ul").removeClass("slide-up");
    $(".cup-javascript h1").addClass("heading-slide-down");
    $(".cup-javascript h1").removeClass("heading-slide-up");
  });
  $(".cup-bootstrap").mouseover(function () {
    $(".cup-bootstrap ul").addClass("slide-up");
    $(".cup-bootstrap ul").removeClass("slide-down");
    $(".cup-bootstrap h1").addClass("heading-slide-up");
    $(".cup-bootstrap h1").removeClass("heading-slide-down");
  });
  $(".cup-bootstrap").mouseout(function () {
    $(".cup-bootstrap ul").addClass("slide-down");
    $(".cup-bootstrap ul").removeClass("slide-up");
    $(".cup-bootstrap h1").addClass("heading-slide-down");
    $(".cup-bootstrap h1").removeClass("heading-slide-up");
  });
  $(".cup-jquery").mouseover(function () {
    $(".cup-jquery ul").addClass("slide-up");
    $(".cup-jquery ul").removeClass("slide-down");
    $(".cup-jquery h1").addClass("heading-slide-up");
    $(".cup-jquery h1").removeClass("heading-slide-down");
  });
  $(".cup-jquery").mouseout(function () {
    $(".cup-jquery ul").addClass("slide-down");
    $(".cup-jquery ul").removeClass("slide-up");
    $(".cup-jquery h1").addClass("heading-slide-down");
    $(".cup-jquery h1").removeClass("heading-slide-up");
  });
  $(".cup-react").mouseover(function () {
    $(".cup-react ul").addClass("slide-up");
    $(".cup-react ul").removeClass("slide-down");
    $(".cup-react h1").addClass("heading-slide-up");
    $(".cup-react h1").removeClass("heading-slide-down");
  });
  $(".cup-react").mouseout(function () {
    $(".cup-react ul").addClass("slide-down");
    $(".cup-react ul").removeClass("slide-up");
    $(".cup-react h1").addClass("heading-slide-down");
    $(".cup-react h1").removeClass("heading-slide-up");
  });
});



$(document).ready(function() {
  $(".toggle-button").click(function(){
    $(".navbar-list").toggleClass("active")
  });
});