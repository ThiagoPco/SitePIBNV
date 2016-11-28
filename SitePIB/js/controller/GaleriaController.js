app.controller('GaleriaController', function (/* $scope, $location, $http */) {

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


});
