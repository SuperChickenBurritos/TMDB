angular
	.module('ngCribs')
	.factory('cribsFactory', function($http){


		function getMovie() {
		return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=040eb2b1bb7d1697319a08872e2578cb&page=1');
		}

		function getTV() {
		return $http.get('https://api.themoviedb.org/3/tv/popular?api_key=040eb2b1bb7d1697319a08872e2578cb&&page=1');
		}
		
		function getMovieS(MSname,MSpage) {
		return $http.get('https://api.themoviedb.org/3/search/movie?api_key=040eb2b1bb7d1697319a08872e2578cb&language=en-US&query='+MSname+'&page='+MSpage+'&include_adult=false');
		}

		function getTVS(TVSname,TVSpage) {
		return $http.get('https://api.themoviedb.org/3/search/tv?api_key=040eb2b1bb7d1697319a08872e2578cb&language=en-US&query='+TVSname+'&page='+TVSpage);
		}



		return {
			getMov: getMovie,
			getTV: getTV,
			getMS: getMovieS,
			getTVS: getTVS
		}

	});