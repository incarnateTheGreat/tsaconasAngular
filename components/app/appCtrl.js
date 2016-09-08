'use strict';

(function () {
    angular.module('tsaconas').controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope',
        '$rootScope',
        '$location',
        '$window',
        '$timeout'];

    function AppCtrl($scope,
                     $rootScope,
                     $location,
                     $window,
                     $timeout) {

        var vm = this;

        function getLoadingElement() {

            var r = {
                isRefreshing: true,
                isLoaded: false,
                refreshUnderway: refreshUnderway,
                refreshComplete: refreshComplete
            };

            loadingElements.push(r);
            refreshUnderway();

            function refreshUnderway() {
                r.isRefreshing = true;
                updateSpinner();
            }

            function refreshComplete() {
                r.isRefreshing = false;
                r.isLoaded = true;
                updateSpinner();
            }

            return r;
        }

        function updateSpinner() {
            var countRefreshing = 0;
            _.forEach(loadingElements, function (e) {
                if (e.isRefreshing) {
                    countRefreshing++;
                }
            });

            vm.showLoadingSpinner = (countRefreshing > 0 || vm.forceShowSpinner);

            /* START HACK */
            /* TODO: This is an iframe hack.  We'll want to remove this as soon as we inergrate the two apps properly.*/

            var iframeContainer = parent.angular.element('#business-review-iframe-container');


            if (!_.isEmpty(iframeContainer)) {
                if (countRefreshing > 0) {
                    iframeContainer.scope().vm.showLoading();
                }
                else {
                    iframeContainer.scope().vm.hideLoading();
                }
            }

            /* END HACK*/


            if (loadingElements.length && !countRefreshing && !didPrintComplete) {
                if (_.has($location.search(), 'print')) {
                    didPrintComplete = true;
                    var printTimeout = $timeout(function () {
                        $window.print();
                    }, 3000);

                    $scope.$on('$destroy', function () {
                        $timeout.cancel(printTimeout);
                    });
                }
            }
        }

        // Assume All Route Change Errors are Fatal
        $rootScope.$on("$routeChangeError", function (evt, current, previous, rejection) {
            console.log("error")
            // errorHandlerSrvc.fatal(rejection.errorMessage, rejection.internalErrorMessage);
            $location.path("fatalError");
        });

        // Reset Loading Elements on Root Change
        $rootScope.$on("$routeChangeSuccess", function () {
            console.log("success")
            // vm.showLoadingSpinner = false;
        });
    }
}());