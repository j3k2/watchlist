angular.module('watchlist.directives')
	.directive("setList", function(){
		return {
			restrict: 'E',
			scope: {
				show: "="
			},
			templateUrl:'series/setlist.html', 
			controller: function($scope, usersFactory, seriesFactory, listsShowsFactory, Auth){
				
				$scope.initSetList = function(){
					usersFactory.getCurrentUser().then(function(user){
					
						$scope.currentUser = user.data;
					
						$scope.currentUser.lists.forEach(function(listItem){
							var scope = this;
								listItem.shows.forEach(function(show){
									if(show.id == scope.show.id){
										scope.currentList = this;
										
										//set $scope.currentList to show's list
									}
								}.bind(listItem));
							}.bind($scope));
					})
					
				}
								//
				// $scope.$watch('currentList', function(list){
				// 	console.log(list);
				// })
				//currentList $watch?
				
				
				$scope.setList = function(show, list){				
						
					$scope.showId = show.id;
					$scope.currentList = list;
					
					
					//delete show from other lists' shows					
					$scope.currentUser.lists.forEach(function(listItem){
						listItem.shows.forEach(function(series){
							if(series.id === $scope.showId){
								listsShowsFactory.deleteShowFromList(show, this)
							}
						}.bind(listItem));
					});


					//adds show to list's shows
					listsShowsFactory.addShowToList(show, list);
					
					usersFactory.getCurrentUser().then(function(user){
					
						$scope.currentUser = user.data;
					})
					
				};
				
				//remove show from list
				$scope.clearList = function(show, list){
					$scope.showId = show.id;

					$scope.currentUser.lists.forEach(function(listItem){
						listItem.shows.forEach(function(show){
							if(show.id == $scope.showId){
								listsShowsFactory.deleteShowFromList(show, this);
							}
						}.bind(listItem));
					});

					$scope.currentList = null;
				};
				
			}
		};
		
	});