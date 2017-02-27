angular
	.module('MarvelApp')
	.controller('ComicsIndexController', ComicsIndexController)

ComicsIndexController.$inject = ['$http'];
function ComicsIndexController(   $http  ){
	var isso = this;
	isso.comics = [];

	$http({
		method: 'GET',
		url: 'http://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=e833b1a40879c619e4fa643455659cee&hash=b3a16a0249d395a7b67e9ed3115430d4'
	}).then(function successCb(response){
		isso.comics.push(response.data.data.results);
	}, function errorCb(response){
		console.log(response);
	})

	$http({
		method: 'GET',
		url: 'http://gateway.marvel.com/v1/public/comics?limit=100&offset=100&ts=1&apikey=e833b1a40879c619e4fa643455659cee&hash=b3a16a0249d395a7b67e9ed3115430d4'
	}).then(function successCb(response){
		isso.comics.push(response.data.data.results);
	}, function errorCb(response){
		console.log(response);
	})

	$http({
		method: 'GET',
		url: 'http://gateway.marvel.com/v1/public/comics?limit=100&offset=200&ts=1&apikey=e833b1a40879c619e4fa643455659cee&hash=b3a16a0249d395a7b67e9ed3115430d4'
	}).then(function successCb(response){
		isso.comics.push(response.data.data.results);
		console.log(isso.comics)
	}, function errorCb(response){
		console.log(response);
	})

}