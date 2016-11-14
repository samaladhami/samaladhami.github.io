angular.module('portfolio')
.directive('codeworkDirective' , function() {

  return{
    restract: 'E'
    ,controller: 'homeCtrl'
    ,templateUrl: '../templates/codeWorkDirective.html'
    ,link: function(scope, element, attrs) {

      $('.sideBar-nav').css('margin-top', '0px');
      $('.sideBar-nav').show()


    }
  }
} )
