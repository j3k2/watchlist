angular.module('watchlist.services')
.factory('listsShowsFactory', ['$http', function($http){


	return {
		deleteShowFromList: function(show, list){
			return $http.delete('/api/listsshows/' + list.id, {params: {show_id: show.id}});
		},

		addShowToList: function(show, list){
			return $http.post('/api/listsshows', {show_id: show.id, list_id: list.id});
		},

	};
		
	}
]);