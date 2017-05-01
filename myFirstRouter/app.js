angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.when('', '/');
    
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    })
    .state('about', {
      url: '/about',
      template: '<h1>This is the about page</h1>'
    })
    .state('roster', {
      url: '/roster',
      templateUrl: 'roster/roster.html',
      controller: 'rosterCtrl'
    })
    .state('player', {
      url: '/player/:id',
      templateUrl: 'player/player.html',
      controller: 'playerCtrl'
  })
})