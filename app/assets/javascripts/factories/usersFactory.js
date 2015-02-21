angular.module('watchlist.services')
.factory('usersFactory', ['$http', '$window', function($http, $window){


		return {
			getUser: function(userId){
				return $http.get('/api/users/' + userId);
			},
		
			getCurrentUser: function(){			//
				// return Auth.currentUser().then(function(user){
				// })
			
					if($window.currentUser){
						return $http.get('/api/users/' + $window.currentUser.id);
					} // else {
						// return {
// 							id: 1,
// 							username: ''
// 						};
					// }
							 		 			
			}
		
		}
	}
]);