app.controller('AboutController', function (/* $scope, $location, $http */) {

  $(document).ready(function() {
    $(".pastors-carousel").owlCarousel({
      autoPlay: 5000,
      slideSpeed:1000,
      singleItem : true,
      transitionStyle : "fadeUp",
      navigation : false
    }); /*** PASTORS MESSAGE CAROUSEL ***/

    $(".team-carousel").owlCarousel({
      autoPlay: 8000,
      rewindSpeed : 3000,
      slideSpeed:2000,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
      itemsTablet : [768,2],
      itemsMobile : [479,1],
      navigation : false,
    }); /*** TEAM CAROUSEL ***/

  });

  $('audio,video').mediaelementplayer();


});
