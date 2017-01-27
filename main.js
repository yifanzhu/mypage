require.config({

    paths: {
        angular: 'bower_components/angular/angular.min',
        'angular-animate': 'bower_components/angular-animate/angular-animate.min',
        'angular-aria': 'bower_components/angular-aria/angular-aria.min',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-material': 'bower_components/angular-material/angular-material.min',
        'angular-material-icons': 'bower_components/angular-material-icons/angular-material-icons.min',
        'angular-messages': 'bower_components/angular-messages/angular-messages.min',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize.min',
        jquery: 'bower_components/jquery/dist/jquery.min',
        lodash: 'bower_components/lodash/lodash'
    },

    shim: {
        angular: {
            exports: 'angular',
            deps: [
                'jquery',
                'lodash'
            ]
        },
        'angular-aria': [
            'angular'
        ],
        'angular-animate': [
            'angular'
        ],
        'angular-bootstrap': [
            'angular'
        ],
        'angular-sanitize': [
            'angular'
        ],
        'angular-messages': [
            'angular'
        ],
        'angular-material': {
             deps: ['angular-aria', 'angular-animate', 'angular-messages']
        },
        'angular-material-icons': [
            'angular'
        ],
        jquery: {
            exports: 'jQuery'
        },
        lodash: {
            exports: '_'
        }
    },

    // kick start application
    deps: ['bootstrap']
});
