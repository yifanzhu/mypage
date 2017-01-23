define([
 	'angular', 
 	'angular-material',
 	'app'
 	], function () {
    var app = angular.module('page.starter', [
    	'ngMaterial',
    	'page.app'
    	]);

    angular.bootstrap(document.getElementsByTagName('body')[0], ['page.starter']);

    return app;
});
