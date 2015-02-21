angular.module('watchlist.directives')
	.directive('setRating', function(){
		return {
			restrict: "E",
			scope: {
				show: "="
			},
			templateUrl: 'series/setrating.html',
			controller: function($scope, ratingsFactory, $window, usersFactory) {
				$scope.init = function(){
					
					usersFactory.getCurrentUser().then(function(user){
						$scope.currentUser = user.data;
						ratingsFactory.getRating($scope.show.id, $scope.currentUser.id)
							.then(function(rating){
								if(rating.data !== null){
									$scope.rate = rating.data.value;
									$scope.ratingId = rating.data.id;
								}
							}); 
						});
				};

				$scope.isReadOnly = false;
				$scope.$watch('rate', function(newRating, oldRating){

					if(newRating !== oldRating){
						
						if($scope.currentUser){
							if(newRating !== null){
								if($scope.ratingId){
									ratingsFactory.updateRating($scope.show.id, $scope.currentUser.id, newRating);
								} else {
									ratingsFactory.createRating($scope.show.id, $scope.currentUser.id, newRating);
								}
							}
						} else {
							$scope.promptLogin = true;
						}
						
					}
					
				});
				}
			};
	});