'use strict';

mainAppModule.directive('carousel',function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/carouselDirectiveTemplate.html'

	};
});

mainAppModule.directive('headerMenu', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/headerMenuDirectiveTemplate.html'
	};
});