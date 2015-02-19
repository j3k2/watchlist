angular.module('watchlist.directives')
	.directive('setRating', function(){
		return {
			restrict: "E",
			scope: {
				show: "="
			},
			templateUrl: 'series/setrating.html',
			controller: function($scope, ratingsFactory, Auth) {
				$scope.init = function(){
					
					Auth.currentUser().then(function(user){
						$scope.currentUser = user;
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
						Auth.currentUser().then(function(user){
							$scope.currentUser = user
							if(newRating !== null){
								if($scope.ratingId){
									ratingsFactory.updateRating($scope.show.id, $scope.currentUser.id, newRating)
								} else {
									ratingsFactory.createRating($scope.show.id, $scope.currentUser.id, newRating)
								}
							}
						}, function(){
							$scope.promptLogin = true;
						});
					}
					
				});
				}
			};
	});