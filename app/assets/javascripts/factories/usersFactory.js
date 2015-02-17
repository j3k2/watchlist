angular.module('watchlist.services')
.factory('usersFactory', ['$http', 'Auth', function($http, Auth){


	return {
		getUser: function(userId){
			return $http.get('/api/users/' + userId)
		},
		
		getCurrentUser: function(){
			return Auth.currentUser().then(function(user){
					return $http.get('/api/users/' + user.id)
			})
			
			
		}		 		 			
	};
		
	}
]);