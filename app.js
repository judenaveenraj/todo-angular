// Declare app level module which depends on views, and components
var app = angular.module('todo', [
  'ngRoute',
  //'todo.login',
  "ui.sortable",
  "ngAnimate",
  "angular.filter",
   "infinite-scroll"
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/:boardId', {
    templateUrl: 'boardView.html',
    controller: 'BoardCtrl'
  }).
  otherwise({redirectTo: '/'});
}]);

