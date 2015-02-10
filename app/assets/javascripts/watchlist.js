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

angular.module('ui.bootstrap').controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});

watchlist.controller('MainCtrl', ['$scope', MainCtrl]);

function MainCtrl($scope) {

}
