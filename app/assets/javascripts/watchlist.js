var watchlist = angular.module('watchlist', ['Devise', 'templates', 'ui.router', 'ui.bootstrap', 'watchlist.services', 'watchlist.directives']);


watchlist.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'index.html',
			controller: function($scope, seriesFactory){
			$scope.shows = seriesFactory.getAllSeries();
			}
		})
		.state('seriesShow', {
			url:'/series/:id',
			templateUrl: 'series/detail.html',
			controller: function($scope, $stateParams, seriesFactory){
				var seriesId = $stateParams.id;
				$scope.show = seriesFactory.getSeries(seriesId);
			}
		})
		.state('user', {
			url:'/user/:id',
			templateUrl: 'users/show.html',
			controller: function($scope, $stateParams, usersFactory){
				var userId = $stateParams.id;
				
				usersFactory.getUser(userId).then(function(response){
					$scope.user = response.data;
				});

			}
		})
		.state('login', {
	      url: '/login',
	      templateUrl: 'auth/_login.html',
	      controller: 'AuthCtrl',
				onEnter: ['$state', 'Auth', function($state, Auth) {
				        Auth.currentUser().then(function (){
				          $state.go('index');
				        });
				      }]
	  })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
				onEnter: ['$state', 'Auth', function($state, Auth) {
				        Auth.currentUser().then(function (){
				          $state.go('index');
				        });
				      }]
    });
});

watchlist.controller('NavCtrl', ['$scope', 'Auth', '$state', function($scope, Auth, $state){
  $scope.signedIn = Auth.isAuthenticated;

  $scope.logout = Auth.logout;

	Auth.currentUser().then(function (user){
	     $scope.user = user;
	});
  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
		$state.go('index');
  });
	
}]);

watchlist.controller('AuthCtrl', ['$scope', '$state', 'Auth', function($scope, $state, Auth){
	$scope.login = function() {
	    Auth.login($scope.user).then(function(){
	      $state.go('index');
	    });
	  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('index');
    });
  };
}]);