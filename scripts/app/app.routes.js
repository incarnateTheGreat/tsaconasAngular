'use strict';

(function () {
    // Defer Route loading
    var $routeProviderReference;
    angular.module("tsaconas").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProviderReference = $routeProvider;
    }]);

    angular.module("tsaconas").run(['$rootScope', routeProvider]);

    function routeProvider() {
        var vm = this;

        $routeProviderReference
            .when('/', {
                title: "Home",
                templateUrl: '/components/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm',
                css: ''
            })
            .when('/about', {
                title: "About",
                templateUrl: '/components/about/about.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm',
                css: ''
            })
            .when('/resume', {
                title: "Resume",
                templateUrl: '/components/home/resume.html',
                controller: 'resumeCtrl',
                controllerAs: 'vm',
                css: ''
            });
    }
}());