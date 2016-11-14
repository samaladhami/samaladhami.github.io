angular.module('portfolio' , ['ui.router'])
  .config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state( 'home', {
        url: '/',
        controller: 'homeCtrl'
        ,templateUrl: 'templates/homeTemp.html'

      } )


      .state( 'codeWork', {
        url: '/codeWork',
        controller: 'homeCtrl'
        ,templateUrl: 'templates/codeWork.html'

      } )

      .state( 'whatIknow', {
        url: '/whatIknow',
        controller: 'homeCtrl'
        ,templateUrl: 'templates/whatIknow.html'

      } )

      .state( 'contact', {
        url: '/contact',
        controller: 'homeCtrl'
        ,templateUrl: 'templates/contact.html'

      } )

    } )
