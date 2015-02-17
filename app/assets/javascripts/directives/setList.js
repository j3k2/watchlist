angular.module('watchlist.directives')
	.directive("setList", function(){
		return {
			restrict: 'E',
			scope: {
				show: "=",
			},
			templateUrl:'series/setlist.html', 
			controller: function($scope, usersFactory, seriesFactory, listsShowsFactory, Auth){
				$scope.init = function(){
					Auth.currentUser().then(function(user){
						//avoid making $http call every time???
						usersFactory.getUser(user.id).then(function(user){
							
							$scope.currentUser = user.data;
							
							$scope.currentUser.lists.forEach(function(listItem){
								listItem.shows.forEach(function(show){
									if(show.id == $scope.show.id){
										$scope.currentList = this;
									}
								}.bind(listItem));
						});
						});
					});
			
				};
								
				$scope.setList = function(show, list){				
						
					$scope.showId = show.id;
					$scope.currentList = list;
					
					
					//delete show from other lists' shows					
					$scope.currentUser.lists.forEach(function(listItem){
						listItem.shows.forEach(function(show){
							if(show.id == $scope.showId){
																//
								// var idx = this.shows.indexOf(show);
								// this.shows.splice(idx, 1);
								
							listsShowsFactory.deleteShowFromList(show, this)
								.then(function(){
									listsShowsFactory.addShowToList(show, this)
							})
								
							}
						}.bind(listItem));
					});

					
					//adds show to list's shows	
					// list.shows.push(show);
					listsShowsFactory.addShowToList(show, list)
					
				};
				
				//remove show from list
				$scope.clearList = function(show, list){
					$scope.showId = show.id;

					$scope.currentUser.lists.forEach(function(listItem){
						listItem.shows.forEach(function(show){
							if(show.id == $scope.showId){
																//
								// var idx = this.shows.indexOf(show);
								// this.shows.splice(idx, 1);
							listsShowsFactory.deleteShowFromList(show, this)// .then(function(){
// 							})
								
							}
						}.bind(listItem));
					});

					$scope.currentList = null;
				};
				
			}
		};
		
	});