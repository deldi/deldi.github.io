var app = angular.module('deldiApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html'
	})
	$routeProvider.when('/about', {
		controller: 'ConstructionCtrl',
		templateUrl: 'templates/about.html'
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
		controller: 'ContactCtrl',
		templateUrl: 'templates/contact.html'
	})
	$routeProvider.otherwise('/');
});

app.controller('NavbarCtrl', function($scope) {
	// PUT SOMETHING HERE
});


app.controller('HomeCtrl', function($scope) {
	angular.element(document).ready(function() {
		var newsletterForm = $('#newsletter-form');
		var newsletterFormUrl = 'https://script.google.com/macros/s/AKfycbzzuAbDaZgXpgip0hqJ5Ymmp9sG4OsPKjRRq0j-JhoCvhPQPp4/exec';

		$('#newsletter-submit').on('click', function(e) {
			e.preventDefault();
			var jqxhr = $.ajax({
				url: newsletterFormUrl,
			    method: 'GET',
			    dataType: 'json',
			    data: newsletterForm.serializeObject()
			}).success(
			    // do something
			);
		});
	});
});

app.controller('ContactCtrl', function($scope) {
	angular.element(document).ready(function() {
		var contactForm = $('#contact-form');
		var contactFormUrl = 'https://script.google.com/macros/s/AKfycbwTkc-yguUvjNkot-l731m2WkMdOLReYOsZI3eZ9TTPwKyWiGk/exec';

		$('#contact-submit').on('click', function(e) {
			e.preventDefault();
			var jqxhr = $.ajax({
				url: contactFormUrl,
				method: 'GET',
				dataType: 'json',
				data: contactForm.serializeObject()
			}).success(
				// do something
			);
		});
	});
});

app.controller('ConstructionCtrl', function($scope) {
	// PUT SOMETHING HERE
});