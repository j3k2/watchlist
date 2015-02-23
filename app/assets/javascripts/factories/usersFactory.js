angular.module('watchlist.services')
.factory('usersFactory', ['$http', '$window', function($http, $window){


		return {
			getUser: function(userId){
				return $http.get('/api/users/' + userId, { cache: true });
			},
		
			getCurrentUser: function(){	
				if($window.currentUser){
						return $http.get('/api/users/' + $window.currentUser.id, { cache: true });
					}
							 		 			
			}
		
		}
	}
]);