(function() {

	var app = angular.module('app', []);

	app.constant('API_URL', 'http://localhost:3000/api');

	app.controller('MainCtrl', function($scope, BookFactory) {

		BookFactory.getBooks().then(function success(response) {
			$scope.books = response.data;
		});

	});

	app.factory('BookFactory', function($http, API_URL) {
		return {
			getBooks: getBooks
		};
		function getBooks() {
			return $http.get(API_URL + '/books');
		}
	});
})();


