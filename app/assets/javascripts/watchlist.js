var watchlist = angular.module('watchlist', ['templates', 'ui.router']);


watchlist.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'index.html',
			controller: function($scope, seriesFactory){
			$scope.shows = seriesFactory.getAllSeries();
			}
		})
		.state('seriesShow', {
			url:'/series/:id',
			templateUrl: 'series/show.html',
			controller: function($scope, $stateParams, seriesFactory){
				var seriesId = $stateParams.id;
				// $scope.seriesId = seriesId;
				// debugger
				$scope.show = seriesFactory.getSeries(seriesId);
			}
		});
});

watchlist.factory('seriesFactory', [function(){
	var series = {};
	
	series = [
		{
			id: 73739,
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

		},
		{
			id:82066,
			title: 'Fringe',
			desc: 'The series follows a Federal Bureau of Investigation "Fringe Division" team based in Boston. The team uses unorthodox "fringe" science and FBI investigative techniques to investigate a series of unexplained, often ghastly occurrences, some of which are related to mysteries surrounding a parallel universe.',
			imgUrl: 'http://thetvdb.com/banners/_cache/posters/82066-6.jpg'
		},
		{
			id:70533,
			title: 'Twin Peaks',
			desc: 'The body of Laura Palmer is washed up on a beach near the small Washington state town of Twin Peaks. FBI Special Agent Dale Cooper is called in to investigate her strange demise only to uncover a web of mystery that ultimately leads him deep into the heart of the surrounding woodland and his very own soul.',
			imgUrl: 'http://thetvdb.com/banners/_cache/posters/70533-5.jpg'
		},
		{
			id:259063,
			title: 'Hannibal',
			desc: 'Both a gift and a curse, Graham has the extraordinary ability to think like his prey—he sees what they see, feels what they feel. But while Graham is pursuing an especially troubling, cannibalistic murderer, Special Agent Jack Crawford teams him with a highly respected psychiatrist – a man with a taste for the criminal minded – Dr. Hannibal Lecter.',
			imgUrl: 'http://thetvdb.com/banners/_cache/posters/259063-20.jpg'
		},
		{
			id:82467,
			title: 'Eastbound & Down',
			desc: 'Relief Pitcher Kenny Powers was poised to rule the Big Leagues, but two things got in his way: his fading fastball and his insufferable personality. After a spectacular career flame-out, Kenny came home to Shelby, NC and picked up a job as a substitute gym teacher (mostly so his brother Dustin would stop threatening to kick him out). He\'s spent every moment since then cashing in the last of his dying fame while plotting his inevitable comeback...one beer at a time.',
			imgUrl: 'http://thetvdb.com/banners/_cache/posters/82467-5.jpg'
		}
	];	
	
	return {
		getAllSeries: function(){
			return series;
		},
		getSeries: function(seriesId){
			var selectedShow = null;
			series.forEach(function(show){
				if(show.id == seriesId){
					selectedShow = show;
				}
			});
			return selectedShow;
		}
	};
}]);

watchlist.controller('MainCtrl', ['$scope', MainCtrl]);

function MainCtrl($scope) {

}
