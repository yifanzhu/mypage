define([
    'angular',
    'angular-sanitize',
    'angular-material-icons',
    'angular-bootstrap',
    './directives/index'
], function (angular) {
    'use strict';
    return angular.module('page.app', [
        'ngSanitize',
        'ngMdIcons',
        'ui.bootstrap',
        'page.directives'
    ]);
});