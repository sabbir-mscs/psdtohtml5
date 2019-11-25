$(document).ready(function() {
  //! Initialize WOW
  new WOW().init();

  //?iphone appears
  $(".js-wp-2").waypoint(
    function(direction) {
      $(".js-wp-2").addClass("animated bounceInUp");
    },
    {
      offset: "100%"
    }
  );
  //? Button press
  $(".iphone-btn")
    .delay(2300)
    .animate(
      {
        bottom: "+=-3"
      },
      300
    );

  $(".iphone-btn")
    .delay(300)
    .animate(
      {
        top: "+=-3"
      },
      300
    );
  //?iPhone Display On
  $(".js-wp-3").waypoint(
    function(direction) {
      $(".js-wp-3").addClass("animated fadeIn");
    },
    {
      offset: "100%"
    }
  );

  //!Section Appearance
  $(".section-appear").waypoint(
    function(direction) {
      $(".section-appear").addClass("animated fadeIn");
    },
    {
      offset: "100%"
    }
  );
});
