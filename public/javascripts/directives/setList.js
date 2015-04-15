angular.module('watchlist.directives').directive('setList', ['$rootScope', '$cacheFactory', function(){
		return {
			restrict: 'E',
			scope: {
				show: "="
			},
			templateUrl:'templates/series/setlist.html',
			controller: function($scope, usersFactory, listingsFactory, listsFactory, $cacheFactory){

				$scope.initSetList = function(){
					usersFactory.getCurrentUser().then(function(user){

						$scope.currentUser = user.data;
						$scope.currentUser.lists.forEach(function(listItem){

								listsFactory.getList(listItem._id).then(function(list){

									list.data.shows.forEach(function(show){
										if(show._id === $scope.show._id){
											$scope.currentList = this;
											//set $scope.currentList to show's list
										}
									}.bind(listItem));
								});
						});
					});

				};


				$scope.setList = function(show, list){
					$scope.showId = show._id;

					//delete current listing:
					if($scope.currentList){
						listingsFactory.deleteShowFromList(show, $scope.currentList);
					}

					//adds show to list's shows
					listingsFactory.addShowToList(show, list).then(function(listing){
						$scope.currentList = list;
					});

					var $httpDefaultCache = $cacheFactory.get('$http');

					$httpDefaultCache.remove('/api/users/' + $scope.currentUser._id);
				};

				//remove show from list
				$scope.clearList = function(show, list){
					$scope.showId = show._id;

					listingsFactory.deleteShowFromList(show, list).then(function(){
							$scope.currentList = null;

					});

					var $httpDefaultCache = $cacheFactory.get('$http');

					$httpDefaultCache.remove('/api/users/' + $scope.currentUser._id);
				};

			}
		};
	}]);
