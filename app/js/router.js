'use strict';

mainAppModule.config(function ($routeProvider) {
	$routeProvider
	.when('/', 
		{
			templateUrl: 'templates/main.html'
			
		})
	.when('/preorder', 
		{
			templateUrl: 'templates/preorderTemplate.html',
			controller: 'orderCtrl'
		})
	.when('/autowatering-system', 
		{
			templateUrl: 'templates/productsListTemplate.html'
		})
	.otherwise({ redirectTo: '/' });
})