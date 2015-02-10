angular.module('watchlist.services').factory('usersFactory', [function(){
	var users = {};

	users = [
		{
			id: 1,
			username: 'hello',
			lists: [
				{
					id:1,
					category:"to_watch",
					shows:[
						{
							id: 73739,
							title: 'Lost',
							desc: 'After their plane, Oceanic Air flight 815, tore apart whilst thousands of miles off course, the survivors find themselves on a mysterious deserted island where they soon find out they are not alone.',
							imgUrl: 'http://i.imgur.com/USIatiN.jpg'
						},
						{
							id: 3,
							title: 'Breaking Bad',
							desc: 'Walter White, a struggling high school chemistry teacher, is diagnosed with advanced lung cancer. He turns to a life of crime, producing and selling methamphetamine accompanied by a former student, Jesse Pinkman, with the aim of securing his family\'s financial future before he dies.',
							imgUrl: 'http://thetvdb.com/banners/_cache/posters/81189-7.jpg'

						},
						{
							id:259063,
							title: 'Hannibal',
							desc: 'Both a gift and a curse, Graham has the extraordinary ability to think like his prey—he sees what they see, feels what they feel. But while Graham is pursuing an especially troubling, cannibalistic murderer, Special Agent Jack Crawford teams him with a highly respected psychiatrist – a man with a taste for the criminal minded – Dr. Hannibal Lecter.',
							imgUrl: 'http://thetvdb.com/banners/_cache/posters/259063-20.jpg'
						}
					]
				},
				{
					id:2,
					category:"watching",
					shows:[
						{
							
						}
					]
				},
				{
					id:3,
					category:"watched",
					shows:[
						{
							
						}
					]
				},
			]
				
			
		},
		{
			id:2,
			username: 'demo',
			lists: [
				{
					id:4
					
				}
			]
		}
	];

	return {
		getUser: function(userId){
			var selectedUser = null;
			users.forEach(function(user){
				if(user.id == userId){
					selectedUser = user;
				}
			});
			return selectedUser;
		}
	};
}]);