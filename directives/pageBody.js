define(['./module'], function (app) {
    return app.directive('pageBody', [function () {

        function dialogController($scope, $mdDialog) {
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
        }

        function pageBodyController($scope, $mdDialog) {
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;

            $scope.preview = function(ev) {
                $mdDialog.show({
                    controller: dialogController,
                    templateUrl: 'templates/resume.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
            };

            $scope.workExp = {
                company: 'Axle Informatics, LLC',
                title: 'Software Developer',
                duration: 'Nov 2015 – Present',
                projects: [
                    {
                        id:0,
                        title: 'Consumables Management System(Mobile Version)',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        description: 'An inventory management system for mobile'
                    },
                    {
                        id:1,
                        title: 'Consumables Management System',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        description: 'An inventory management system'
                    },
                    {
                        id:2,
                        title: 'Freezer Management System',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        description: 'An sample management system for lab'
                    }
                ]
            }
        }

        return {
            restrict: 'E',
            templateUrl: 'templates/body.html',
            scope: {
                options: '='
            },
            controller: pageBodyController
        };
    }]);
});
