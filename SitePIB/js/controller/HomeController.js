
app.controller('HomeController', function (/* $scope, $location, $http */) {

  $('.countdown').downCount({
    date: '06/25/2016 12:00:00',
    offset: +10
  });

  $(window).load(function(){
  	$(function(){
  		var $portfolio = $('.mas-gallery');
  		$portfolio.isotope({
  			masonry: {
  				columnWidth: 1
  			}
  		});
  	});
  });

  $(document).ready(function() {

  	$("#select1").minimalect({ theme: "bubble", placeholder: "Select Gender" });
  	$("#select2").minimalect({ theme: "bubble", placeholder: "Select Age" });
  	$("#select3").minimalect({ theme: "bubble", placeholder: "Select Your Area" });


  	$(".tweets-slides").owlCarousel({
  		autoPlay: 5000,
  		slideSpeed:1000,
  		singleItem : true,
  		transitionStyle : "fadeUp",
  		navigation : false
  	}); /*** TWEETS CAROUSEL ***/


  	$(".fullwidth-carousel").owlCarousel({
  		autoPlay: false,
  		rewindSpeed : 3000,
  		slideSpeed:2000,
  		items : 4,
  		itemsDesktop : [1199,3],
  		itemsDesktopSmall : [979,2],
  		itemsTablet : [768,1],
  		itemsMobile : [479,1],
  		navigation : false,
  	}); /*** PRODUCTS CAROUSEL ***/

  });

  $('audio,video').mediaelementplayer();

  jQuery(document).ready(function() {
  	jQuery("#slider1").revolution({
  		sliderType:"standard",
  		sliderLayout:"fullwidth",
  		delay:9000,
  		navigation: {
  			arrows:{enable:true}
  		},
  		gridwidth:1100,
  		gridheight:500
  	});
  });

});
