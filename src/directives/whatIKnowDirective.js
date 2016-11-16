angular.module('portfolio')
.directive('whatiknowDirective' , function() {

  return{
    restract: 'E'
    ,controller: 'homeCtrl'
    ,templateUrl: '../templates/whatIKnowDirective.html'
    ,link: function(scope, element, attrs) {

      $('.sideBar-nav').css('margin-top', '0px');
      $('.sideBar-nav').show();
      $('.who-I-am').css('color' , '#464646');
      $('.code-work-button').css('color' ,'#464646');
      $('.what-I-know').css('color' ,'rgb(193, 192, 192)');
      $('.contact').css('color' , '#464646');
       

    }
  }
} )
