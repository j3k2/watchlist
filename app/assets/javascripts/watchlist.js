var watchlist = angular.module('watchlist', ['templates', 'ui.router', 'watchlist.services']);


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
				// $scope.seriesId = seriesId;
				// debugger
				$scope.show = seriesFactory.getSeries(seriesId);
			}
		});
});

watchlist.controller('MainCtrl', ['$scope', MainCtrl]);

function MainCtrl($scope) {

}
