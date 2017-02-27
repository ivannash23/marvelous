angular
	.module('MarvelApp')
	.controller('ComicsIndexController', ComicsIndexController)

ComicsIndexController.$inject = ['$http'];
function ComicsIndexController(   $http  ){
	var isso = this;

	$http({
		method: 'GET',
		url: 'http://gateway.marvel.com/v1/public/comics?limit=99&ts=1&apikey=e833b1a40879c619e4fa643455659cee&hash=b3a16a0249d395a7b67e9ed3115430d4'
	}).then(function successCb(response){
		console.log(response.data.data.results[0]);
	}, function errorCb(response){
		console.log(response);
	})

}