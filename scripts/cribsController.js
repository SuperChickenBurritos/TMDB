angular
	.module('ngCribs')
	.controller('cribsController', function($scope,$http, cribsFactory){
	


		cribsFactory.getMov().success(function(data){
			$scope.Results= data.results;
		})

		$scope.getMpop = function(){
		cribsFactory.getMov().success(function(data){
			$scope.Results= data.results;
		})}

		$scope.MovieSearch = function(isMovie){

			
			Name=document.getElementById('Name').value;

			if (isMovie)
			cribsFactory.getMS(Name,1).success(function(data){
			$scope.Results= data.results;}

		)}
		

		$scope.getTVpop = function(){
			cribsFactory.getTV().success(function(data){
			$scope.Results= data.results;
		})}

	
		$scope.TVSearch = function(isMovie){
			
			Name=document.getElementById('Name').value;

			if(!isMovie) 
			cribsFactory.getTVS(Name,1).success(function(data){
			$scope.Results= data.results;}

			)}





	});