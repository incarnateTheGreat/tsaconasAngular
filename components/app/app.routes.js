'use strict';

(function () {
    // Defer Route loading
    var $routeProviderReference;
    angular.module("tsaconas").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProviderReference = $routeProvider;
    }]);

    angular.module("tsaconas").run(['$rootScope', '$q', '$ocLazyLoad', routeProvider]);

    function routeProvider($rootScope, $q, $ocLazyLoad) {
        var vm = this;

        $routeProviderReference
            .when('/', {
                title: "Home",
                templateUrl: '/angular/components/app/pages/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm',
                css: '',
                resolve: {
                    homePrep: homePrep
                }
            })
            .when('/about', {
                title: "About",
                templateUrl: '/angular/components/app/pages/about/about.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm',
                css: '',
                resolve: {
                    aboutPrep: aboutPrep
                }
            })
            .when('/resume', {
                title: "Resume",
                templateUrl: '/angular/components/app/pages/resume/resume.html',
                controller: 'resumeCtrl',
                controllerAs: 'vm',
                css: '',
                resolve: {
                    resumePrep: resumePrep
                }
            });

        function homePrep() {
            var d = $q.defer();

            $ocLazyLoad.load(['/angular/components/app/pages/home/homeCtrl.js']).then(function () {
                d.resolve(true);
            }, function () {
                d.reject({errorMessage: "Cannot Load Dependencies"});
            });

            return d.promise;
        }

        function aboutPrep() {
            var d = $q.defer();

            $ocLazyLoad.load(['/angular/components/app/pages/about/aboutCtrl.js']).then(function () {
                d.resolve(true);
            }, function () {
                d.reject({errorMessage: "Cannot Load Dependencies"});
            });

            return d.promise;
        }

        function resumePrep() {
            var d = $q.defer();

            $ocLazyLoad.load(['/angular/components/app/pages/resume/resumeCtrl.js']).then(function () {
                d.resolve(true);
            }, function () {
                d.reject({errorMessage: "Cannot Load Dependencies"});
            });

            return d.promise;
        }
    }
}());