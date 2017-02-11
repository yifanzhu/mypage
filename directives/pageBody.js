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
                        title: 'Consumables Management System',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1485975509/Screen_Shot_2017-02-01_at_1.33.19_PM_eood75.png',
                        description: 'A Check-In and Check-Out system which can track consumables in and out, generate barcodes for consumables, assign locations to consumables and check stock level for consumables.'
                    },
                    {
                        id:1,
                        title: 'Freezer Management System',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1485975509/Screen_Shot_2017-02-01_at_1.34.53_PM_zyvrkb.png',
                        description: 'An application which can help user map and manage relations among freezers, donors and derivatives.'
                    },
                    {
                        id:2,
                        title: 'Consumables Management System(Mobile Version)',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1485975509/Screen_Shot_2017-02-01_at_1.33.19_PM_eood75.png',
                        description: 'iOS and Android version of Consumables Management System.'
                    }
                ]
            };

            $scope.portfolio = {
                projects: [
                    {
                        id:0,
                        name: 'My Page',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314597/photo-1432821596592-e2c18b78144f_l3smw2.jpg',
                        sourceCode: 'https://github.com/yifanzhu/mypage',
                        page: 'https://yifanpage.herokuapp.com'
                    },
                    {
                        id:1,
                        name: 'Memories',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1485998231/Screen_Shot_2017-02-01_at_8.16.52_PM_csgvff.png',
                        sourceCode: 'https://github.com/yifanzhu/memories',
                        page: 'https://yifanmemories.herokuapp.com'
                    },
                    {
                        id:1,
                        name: 'My Blog',
                        image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314505/photo-1429051781835-9f2c0a9df6e4_u9fduy.jpg',
                        sourceCode: 'https://github.com/yifanzhu/myblog'
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
