'use strict';

/* Controllers */

mainAppModule.controller('orderCtrl', function ($scope) {
	$scope.preorderSubmit = function(registrationModel) {
		console.log(registrationModel.email);
	};
});