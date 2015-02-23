angular.module('watchlist.directives').directive('setList', ['$rootScope', '$cacheFactory', function(){
		return {
			restrict: 'E',
			scope: {
				show: "="
			},
			templateUrl:'series/setlist.html', 
			controller: function($scope, usersFactory, seriesFactory, listingsFactory, $window, $cacheFactory, $rootScope){
				
				$scope.initSetList = function(){
					usersFactory.getCurrentUser().then(function(user){					
						$scope.currentUser = user.data;
						$rootScope.currentUser = user.data;
					
						$scope.currentUser.lists.forEach(function(listItem){
								listItem.shows.forEach(function(show){
									if(show.id == $scope.show.id){
										$scope.currentList = this;
										//set $scope.currentList to show's list
									}
								}.bind(listItem));
							});
					})
					
				}
				
				
				$scope.setList = function(show, list){				
						
					$scope.showId = show.id;
					$scope.currentList = list;
					
					//when a listing is deleted or created, also update clientside version of the user object...
					
					//delete show from other lists' shows					
					$scope.currentUser.lists.forEach(function(listItem){
						listItem.shows.forEach(function(series){
							if(series.id === $scope.showId){
								listingsFactory.deleteShowFromList(show, this);
							}
						}.bind(listItem));
					});


					//adds show to list's shows
					listingsFactory.addShowToList(show, list);
								
					var $httpDefaultCache = $cacheFactory.get('$http');  
					
					$httpDefaultCache.remove('/api/users/' + $scope.currentUser.id);
				};
				
				//remove show from list
				$scope.clearList = function(show, list){
					$scope.showId = show.id;

					$scope.currentUser.lists.forEach(function(listItem){
						listItem.shows.forEach(function(show){
							if(show.id == $scope.showId){
								listingsFactory.deleteShowFromList(show, this);
							}
						}.bind(listItem));
					});
					var $httpDefaultCache = $cacheFactory.get('$http');  
					
					$httpDefaultCache.remove('/api/users/' + $scope.currentUser.id);
					
					$scope.currentList = null;
				};
				
			}
		};
		
	}]);