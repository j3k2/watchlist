angular.module('watchlist.services')
.factory('listsFactory', ['$http', 'Auth', function($http, Auth){


	return {
		getList: function(listId){
			return $http.get('/api/lists/' + listId)
		}	 			
	};
		
	}
]);