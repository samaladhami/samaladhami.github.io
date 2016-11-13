angular.module('portfolio' , ['ui.router'])
  .config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state( 'home', {
        url: '/',
        controller: 'homeCtrl'
        ,templateUrl: 'templates/homeTemp.html'

      } )

    } )
    
