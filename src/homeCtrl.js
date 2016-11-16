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
  $scope.goToGithub = function(){
    window.open('https://github.com/samaladhami ')
  }
  $scope.goToLinkedin = function(){
    window.open('https://www.linkedin.com/in/samaladhami')
  }
  $scope.goToFacebook = function(){
    window.open('https://www.facebook.com/samir.setoo')
  }


})
