angular.module('watchlist.directives').directive('setList', ['$rootScope', '$cacheFactory', function(){
		return {
			restrict: 'E',
			scope: {
				show: "="
			},
			templateUrl:'templates/series/setlist.html',
			controller: function($scope, usersFactory, seriesFactory, listingsFactory, listsFactory, $window, $cacheFactory, $rootScope){

				$scope.initSetList = function(){
					usersFactory.getCurrentUser().then(function(user){

						$scope.currentUser = user.data;
						$rootScope.currentUser = user.data;
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
					debugger
					$scope.showId = show._id;

					//when a listing is deleted or created, also update clientside version of the user object...

					//delete show from other lists' shows
					// $scope.currentUser.lists.forEach(function(listItem){
					// 	listsFactory.getList(listItem._id).then(function(list){
					// 		console.log(list);
					// 		list.data.shows.forEach(function(show){
					//
					// 			if(show === $scope.showId){
					// 				listingsFactory.deleteShowFromList(show, list).then(function(){
					// 					debugger
					// 				});
					// 			}
					// 		}.bind(listItem));
					// 	});
					// });

					//delete current listing:
					if($scope.currentList){
						listingsFactory.deleteShowFromList(show, $scope.currentList).then(function(){
						});


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

					// $scope.currentUser.lists.forEach(function(listItem){
					// 	listsFactory.getList(listItem._id).then(function(list){
					// 		list.data.shows.forEach(function(show){
					//
								// if(show === $scope.showId){
									listingsFactory.deleteShowFromList(show, list).then(function(){
										$scope.currentList = null;

									});
					// 			}
					// 		}.bind(listItem));
					// 	});
					// });


					var $httpDefaultCache = $cacheFactory.get('$http');

					$httpDefaultCache.remove('/api/users/' + $scope.currentUser._id);

				};

			}
		};
	}]);
