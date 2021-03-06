var watchlist = angular.module('watchlist', ['ngLoadingSpinner', 'ui.router', 'ui.bootstrap', 'watchlist.services', 'watchlist.directives']);



watchlist.config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
    usSpinnerConfigProvider.setDefaults({color: 'wheat'});
}]);
watchlist.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'templates/index.html',
			controller: function($scope, seriesFactory){
			$scope.shows = seriesFactory.getAllSeries();
			}
		})
		.state('seriesShow', {
			url:'/series/:id',
			templateUrl: 'templates/series/detail.html',
			controller: function($scope, $stateParams, seriesFactory){
				var seriesId = $stateParams.id;
				$scope.show = seriesFactory.getSeries(seriesId);
			}
		})
		.state('user', {
			url:'/user/:id',
			templateUrl: 'templates/users/show.html',
			controller: function($scope, $stateParams, usersFactory, $state, $window){
				var userId = $stateParams.id;

				usersFactory.getUser(userId).then(function(response){
					$scope.user = response.data;
					// $state.go('user.list');
				});
								//
				// Auth.currentUser().then(function(response){
				// 	$scope.currentUser = response;
				// })

				$scope.currentUser = $window.currentUser;
			}
		})
		.state('user.newlist', {
			url:'/newlist',
			template:'<div>asdf</div>',
			controller: function(){

			}
		})
		.state('user.list', {
			url:'/list/:listId',
			templateUrl: 'templates/users/list.html',
			controller: function($scope, $stateParams, listsFactory){
				$scope.listId = $stateParams.listId
				listsFactory.getList($scope.listId).then(function(list){
					$scope.list = list.data
				});
			}
		})
		.state('signIn', {
			url: '/sign_in',
	    templateUrl: 'templates/user_sessions/new.html',
	    controller: 'UserSessionsCtrl'
		})
		// .state('login', {
		// 	      url: '/login',
		// 	      templateUrl: 'auth/_login.html',
		// 	      controller: 'AuthCtrl',
		// 		onEnter: ['$state', 'Auth', function($state, Auth) {
		// 		        Auth.currentUser().then(function (){
		// 		          $state.go('index');
		// 		        });
		// 		      }]
		// 	  })
		//     .state('register', {
		//       url: '/register',
		//       templateUrl: 'auth/_register.html',
		//       controller: 'AuthCtrl',
		// 		onEnter: ['$state', 'Auth', function($state, Auth) {
		// 		        Auth.currentUser().then(function (){
		// 		          $state.go('index');
		// 		        });
		// 		      }]
		//     });
});

watchlist.controller('UserSessionsCtrl', ['$scope', function($scope){

}])
//
// watchlist.controller('NavCtrl', ['$scope', 'Auth', '$state', function($scope, Auth, $state){
//   $scope.signedIn = Auth.isAuthenticated;
//
//   $scope.logout = Auth.logout;
//
// 	Auth.currentUser().then(function (user){
// 		$scope.user = user;
// 	});
// 	  $scope.$on('devise:new-registration', function (e, user){
// 	    $scope.user = user;
// 	  });
//
// 	  $scope.$on('devise:login', function (e, user){
// 	    $scope.user = user;
// 	  });
//
// 	  $scope.$on('devise:logout', function (e, user){
// 	    $scope.user = {};
// 		$state.go('login');
// 	  });
//
// }]);
//
// watchlist.controller('AuthCtrl', ['$scope', '$state', 'Auth', function($scope, $state, Auth){
// 	$scope.login = function() {
// 	    Auth.login($scope.user).then(function(){
// 	      $state.go('index');
// 	    });
// 	  };
//
//   $scope.register = function() {
//     Auth.register($scope.user).then(function(){
//       $state.go('index');
//     });
//   };
//
// 	$scope.guestLogin = function() {
// 		Auth.login({email: 'guest@guest.com', password: 'guestguest'}).then(function(){
// 			$state.go('index');
// 		})
// 	};
// }]);
