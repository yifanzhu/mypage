define(['./module'], function (app) {
    return app.directive('pageBody', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/body.html',
            scope: {
                options: '='
            },
            controller: [
                '$scope',
                function($scope) {
                    var newWidth = 600;
                    $scope.myInterval = 5000;
                    $scope.noWrapSlides = false;
                    $scope.active = 0;
                    var slides = $scope.slides = [];
                    var currIndex = 0;


                    $scope.addSlide = function() {
                        var newWidth = 600 + slides.length + 1;
                        slides.push({
                            image: '//unsplash.it/' + newWidth + '/300',
                            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
                            id: currIndex++
                        });
                    };


                    for (var i = 0; i < 4; i++) {
                        $scope.addSlide();
                    }

                    $scope.workExp = {
                        company: 'Axle Informatics, LLC',
                        title: 'Software Developer',
                        duration: 'Nov 2015 – Present',
                        projects: [
                            {
                                id:0,
                                title: 'Consumables Management System for Compound Management Division(Mobile Version)',
                                image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                                description: [
                                    'Set up mobile project using Cordova.',
                                    'Worked on Cordova-plugins to create barcode scanner on mobile which can recognize and read barcode via camera.',
                                    'Used Angular Material, HTML, CSS to build responsive UI for mobile version.',
                                    'Implemented the MVC architecture by applying AngularJS framework.'
                                ]
                            },
                            {
                                id:1,
                                title: 'Consumables Management System for Compound Management Division.',
                                image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                                description: [
                                    'Designed and developed Stock Level module by using UI Grid and Bootstrap.',
                                    'Used JavaScript and AngularJS to create item barcode system, which can generate barcode, print barcode and read barcode using scanner.',
                                    'Designed and developed a tree view for location management using Underscore.js, lodash.',
                                    'Maintained and updated data on SharePoint by writing RESTful APIs using Node.js.',
                                    'Used task runners like Gulp to improve the efficiency of development process.',
                                    'Managed the dependencies with Bower and npm.',
                                    'Fixed the cross browser compatibility issue for Safari, Chrome, Firefox and IE.',
                                    'Wrote e2e-testing using Protractor.',
                                    'Asynchronous data with team members using GIT.'
                                ]
                            },
                            {
                                id:2,
                                title: 'Freezer Management System',
                                image: 'http://res.cloudinary.com/dihnc49qr/image/upload/v1478314764/photo-1453928582365-b6ad33cbcf64_t0ixly.jpg',
                                description: [
                                    'Redesigned the website UI using Angular Material framework to make page responsive, effective and vivid.',
                                    'Completed data migration of donor data by writing RESTful APIs.',
                                    'Created Angular directives to make modules configurable on JSON file and can be reused by other projects.',
                                    'Developed client side validation with AngularJS.',
                                    'Shared the project dependence by using gulp task runner and used npm and bower to update dependence which is shared in Github.',
                                    'Fixed the cross browser compatibility issues for Safari, Chrome, Firefox and IE.',
                                    'Wrote e2e-testing using Protractor.',
                                    'Fixed deployment bugs and CSS crush on production site.'
                                ]
                            }
                        ]
                    }
                }
            ]
        };
    }]);
});
