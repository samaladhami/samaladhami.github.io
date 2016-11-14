angular.module('portfolio')
.directive('whatiknowDirective' , function() {

  return{
    restract: 'E'
    ,controller: 'homeCtrl'
    ,templateUrl: '../templates/whatIKnowDirective.html'
    ,link: function(scope, element, attrs) {
      
      $('.sideBar-nav').css('margin-top', '0px');
      $('.sideBar-nav').show()


    }
  }
} )
