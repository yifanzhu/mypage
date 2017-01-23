define(['./module'], function (app) {
    return app.directive('pageHeader', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/header.html',
            scope: {
                options: '='
            },
            controller: [
                '$scope',
                function ($scope) {
                    $scope.scroll = function(id) {
                        var height = angular.element('#' + id)[0].offsetTop;
                        $('html,body').animate({scrollTop: height},400);
                    }

                }
            ]
        };
    }]);
});
