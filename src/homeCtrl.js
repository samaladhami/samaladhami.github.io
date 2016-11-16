angular.module('portfolio')
.controller('homeCtrl' , function($scope , mainService){
  $scope.goToSamDj = function(){
    window.open('https://shrouded-lake-18280.herokuapp.com/#/')
  }
  $scope.goToEpiano = function(){
    window.open('https://samaladhami.github.io/the-Epiano-App/#/')
  }
  $scope.goToAlienHunt = function(){
    window.open('http://104.236.5.8/#/')
  }


})
