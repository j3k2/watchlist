angular.module('watchlist.services')
.factory('listingsFactory', ['$http', function($http){


	return {
		deleteShowFromList: function(show, list){
			return $http.delete('/api/listings/' + list.id, {params: {show_id: show.id}});
		},

		addShowToList: function(show, list){
			return $http.post('/api/listings', {show_id: show.id, list_id: list.id});
		},

	};
		
	}
]);