angular.module('watchlist', [])
.controller('MainCtrl', ['$scope', MainCtrl]);

function MainCtrl($scope) {
	
	$scope.name = "skalskello";
	
	$scope.shows = [
		{
			id: 1,
			title: 'Lost',
			desc: 'After their plane, Oceanic Air flight 815, tore apart whilst thousands of miles off course, the survivors find themselves on a mysterious deserted island where they soon find out they are not alone.',
			imgUrl: 'http://thetvdb.com/banners/_cache/posters/73739-11.jpg'
		},
		{
			id: 2,
			title: 'The Wire',
			desc: 'Unlike most television crime dramas, which neatly introduce and then solve a case all in the space of one hour, HBO\'s THE WIRE follows one single drug and homicide investigation throughout the length of an entire season. Centered on the drug culture of inner-city Baltimore, the series\' storyline unfolds from the points of view of both the criminals lording the streets and the police officers determined to bring them down.',
			imgUrl: 'http://thetvdb.com/banners/_cache/posters/79126-6.jpg'
		},
		{
			id: 3,
			title: 'Breaking Bad',
			desc: 'Walter White, a struggling high school chemistry teacher, is diagnosed with advanced lung cancer. He turns to a life of crime, producing and selling methamphetamine accompanied by a former student, Jesse Pinkman, with the aim of securing his family\'s financial future before he dies.',
			imgUrl: 'http://thetvdb.com/banners/_cache/posters/81189-7.jpg'
		
		}
	]
}
