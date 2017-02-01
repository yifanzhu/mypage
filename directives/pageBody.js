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
                        description: 'iOS and Android version of Consumables Management System.'
                    },
                    {
                        id:1,
                        title: 'Consumables Management System',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1485975509/Screen_Shot_2017-02-01_at_1.33.19_PM_eood75.png',
                        description: 'A Check-In and Check-Out system which can track consumables in and out, generate barcodes for consumables, assign locations to consumables and check stock level for consumables.'
                    },
                    {
                        id:2,
                        title: 'Freezer Management System',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1485975509/Screen_Shot_2017-02-01_at_1.34.53_PM_zyvrkb.png',
                        description: 'An application which can help user map and manage relations among freezers, donors and derivatives.'
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

            $scope.sendEmail = function() {

            };

            googleLoader.KEY = 'AIzaSyAal8mqIjEPvhJ7LbIvAFZmc9Q_2dlEdmw';

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
