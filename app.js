var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'home.html',
    controller  : 'HomeController'
  })

  .when('/posts', {
    templateUrl : 'posts.html',
    controller  : 'PostsController'
  })

  .when('/comments', {
    templateUrl : 'comments.html',
    controller  : 'CommentsController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope, $http) {
	$scope.header='Users';
  $http.get("http://jsonplaceholder.typicode.com/users")
  .then(function(response) {
      $scope.content = response.data;
  });
});
app.controller('PostsController', function($scope,$http) {
  $scope.header = 'POSTS';
  $http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
      $scope.content = response.data;
  });
});

app.controller('CommentsController', function($scope,$http) {
  $scope.header = 'COMMENTS';
   $http.get("http://jsonplaceholder.typicode.com/comments")
  .then(function(response) {
      $scope.content = response.data;
  });
});