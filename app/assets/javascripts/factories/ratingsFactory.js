angular.module('watchlist.services')
	.factory('ratingsFactory', ['$http', function($http){
		
		return {
			getRating: function(showId, userId){

				return $http.get('/api/ratings/' + userId, {params: {show_id: showId}});
				
			},
			
			updateRating: function(showId, userId, value){
				return $http.patch('/api/ratings/' + userId, 
				{show_id: showId, user_id: userId, value: value})
			},
			
			createRating: function(showId, userId, value){
				return $http.post('/api/ratings',
				{show_id: showId, user_id: userId, value: value})
			}
		}
		
	}]
);