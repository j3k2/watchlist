angular.module('watchlist.services')
.factory('listingsFactory', ['$http', function($http){


	return {
		deleteShowFromList: function(show, list){
			return $http.delete('/api/listings/' + list._id, {params: {show_id: show._id}})
		},

		addShowToList: function(show, list){
			return $http.post('/api/listings/' + list._id, {params: {show_id: show._id}});
		}

	};

	}
]);
