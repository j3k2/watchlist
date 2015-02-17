angular.module('watchlist.services')
.factory('usersFactory', ['$http', function($http){


	return {
		getUser: function(userId){
			return $http.get('/api/users/' + userId)
		}		 		 			
	};
		
	}
]);