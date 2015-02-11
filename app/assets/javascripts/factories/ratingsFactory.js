angular.module('watchlist.services')
	.factory('ratingsFactory', [function(){
		
		var ratings = []
	

		return {
			getRating: function(showId, userId){
				var selectedRating = null;
				ratings.forEach(function(rating){
					if(rating.userId == userId && rating.showId == showId){
						selectedRating = rating;
					}
				})
				return selectedRating || {};
			},
			
			newRating: function(showId, userId, value){
				ratings.push({
					id: ratings.length + 1,
					userId: userId,
					showId: showId,
					value: value
				})
			}
		}
		
	}]
);