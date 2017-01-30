define(['./module', 'google-maps'], function (app, googleLoader) {
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
                        image: 'https://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        description: 'An inventory management system for mobile'
                    },
                    {
                        id:1,
                        title: 'Consumables Management System',
                        image: 'https://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        description: 'An inventory management system'
                    },
                    {
                        id:2,
                        title: 'Freezer Management System',
                        image: 'https://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        description: 'An sample management system for lab'
                    }
                ]
            };

            $scope.portfolio = {
                projects: [
                    {
                        id:0,
                        name: 'My Page',
                        image: 'https://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        sourceCode: 'https://github.com/yifanzhu/mypage',
                        page: 'https://yifanpage.herokuapp.com'
                    },
                    {
                        id:1,
                        name: 'My Blog',
                        image: 'https://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                        sourceCode: 'https://github.com/yifanzhu/myblog',
                        page: 'https://yifanblog.herokuapp.com'
                    }
                ]
            };

            googleLoader.load(function(google) {
                var myLatLng = {lat: 39.0947378, lng: -77.1959366},
                    mapOptions = {
                        zoom: 9,
                        center: myLatLng
                    },
                    map = new google.maps.Map(document.getElementById('map'), mapOptions);

                new google.maps.Marker({
                    map: map,
                    scrollwheel: false,
                    position: myLatLng
                });
            });
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
