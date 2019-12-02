var app = angular.module('deldiApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html'
	})
	$routeProvider.when('/about', {
		controller: 'ConstructionCtrl',
		templateUrl: 'templates/construction.html'
	})
	$routeProvider.when('/music', {
		controller: 'ConstructionCtrl',
		templateUrl: 'templates/construction.html'
	})
	$routeProvider.when('/blog', {
		controller: 'ConstructionCtrl',
		templateUrl: 'templates/construction.html'
	})
	$routeProvider.when('/life', {
		controller: 'ConstructionCtrl',
		templateUrl: 'templates/construction.html'
	})
	$routeProvider.when('/contact', {
		controller: 'ConstructionCtrl',
		templateUrl: 'templates/construction.html'
	})
	$routeProvider.otherwise('/');
});

app.controller('NavbarCtrl', function($scope) {
	// PUT SOMETHING HERE
});


app.controller('HomeCtrl', function($scope) {
	// angular.element(document).ready(function() {
	// 	var facts = $('.life__card__fact');
	// 	$('#dot-1').addClass('life__dot--active');
	// 	for (var i = 1; i < facts.length; i++) {
	// 		$(this).find(facts[i]).hide();
	// 	}

	// 	// var photos = $('.life__photo');
	// 	// for (var i = 0; i < photos.length; i++) {
	// 	// 	console.log(photos);
	// 	// 	$(this).find(photos[i]).hide();
	// 	// }

	// 	window.setInterval(function() {
	// 		var currentFact = $('.life__card__fact:visible');
	// 		var currentFactId = currentFact[0].id;
	// 		var currentFactNum = currentFactId[currentFactId.length - 1];
	// 		switch (currentFactNum) {
	// 			case '1':
	// 				$scope.showFact(2);
	// 				break;
	// 			case '2':
	// 				$scope.showFact(3);
	// 				break;
	// 			case '3':
	// 				$scope.showFact(4);
	// 				break;
	// 			default:
	// 				$scope.showFact(1);
	// 		}
	// 	}, 8000);
	// });
});

app.controller('ConstructionCtrl', function($scope) {
	// PUT SOMETHING HERE
});