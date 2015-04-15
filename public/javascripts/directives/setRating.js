angular.module('watchlist.directives')
	.directive('setRating', function(){
		return {
			restrict: "E",
			scope: {
				show: "="
			},
			templateUrl: 'templates/series/setrating.html',
			controller: function($scope, ratingsFactory, usersFactory) {
				$scope.init = function(){

					usersFactory.getCurrentUser().then(function(user){
						$scope.currentUser = user.data;

						ratingsFactory.getRating($scope.show._id, $scope.currentUser._id)
							.success(function(rating){

								if(rating[0] !== undefined){
									$scope.rate = rating[0].value;
									$scope.ratingId = rating[0]._id;
								}

							});
						});
				};

				$scope.isReadOnly = false;
				$scope.$watch('rate', function(newRating, oldRating){

					if(newRating !== oldRating && newRating !== null){
						if($scope.currentUser){
								if($scope.ratingId){
									ratingsFactory.updateRating($scope.show._id, $scope.currentUser._id, newRating);
								} else {
									ratingsFactory.createRating($scope.show._id, $scope.currentUser._id, newRating);
								}
						} else {
							$scope.promptLogin = true;
						}

					}

				});
				}
			};
	});
