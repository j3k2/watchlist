var watchlist = angular.module('watchlist', ['templates', 'ui.router', 'ui.bootstrap', 'watchlist.services', 'watchlist.directives']);


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
		.state('userShow', {
			url:'/user/:id',
			templateUrl: 'users/show.html',
			controller: function($scope, $stateParams, usersFactory){
				var userId = $stateParams.id;
				$scope.user = usersFactory.getUser(userId);
				
				
			}
		});
});
