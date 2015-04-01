angular.module('watchlist.services')
.factory('listsFactory', ['$http', function($http){


	return {
		getList: function(listId){
			return $http.get('/api/lists/' + listId);
		}
	};

	}
]);
