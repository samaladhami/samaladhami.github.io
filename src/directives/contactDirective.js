angular.module('portfolio')
.directive('contactDirective' , function() {

  return{
    restract: 'E'
    ,controller: 'homeCtrl'
    ,templateUrl: '../templates/contactDirective.html'
    ,link: function(scope, element, attrs) {

      $('.sideBar-nav').css('margin-top', '0px');
      $('.sideBar-nav').show();
      $('.who-I-am').css('color' , '#464646');
      $('.code-work-button').css('color' ,'#464646');
      $('.what-I-know').css('color' , '#464646');
      $('.contact').css('color' ,'rgb(193, 192, 192)');


    }
  }
} )
