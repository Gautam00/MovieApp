describe('Testing Angularjs app', function(){

	beforeEach(module('myApp'));

	describe("Testing Angularjs Controller", function(){

		var scope, ctrl;

		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller('myController', {$scope:scope});
		}));


	});

});