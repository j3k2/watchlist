angular.module('watchlist.directives')
	.directive('setRating', function(){
		return {
			restrict: "E",
			scope: {
				show: "="
			},
			templateUrl: 'series/setrating.html',
			controller: function($scope, ratingsFactory) {
				$scope.init = function(){
					$scope.rate = ratingsFactory.getRating($scope.show.id, 1).value; //get from Ratingsfactory (passing it the showId and userId)
				
				}
				
				$scope.isReadOnly = false;
				$scope.$watch('rate', function(value){
					ratingsFactory.newRating($scope.show.id, 1, value);

				});
				}
			}
	});