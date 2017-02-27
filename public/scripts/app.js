angular
  .module('MarvelApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider ,  $locationProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/comics-index.html',
      controller: 'ComicsIndexController',
      controllerAs: 'cic'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}