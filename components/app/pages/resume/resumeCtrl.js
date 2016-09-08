'use strict';

(function () {
    angular.module("tsaconas").controller("resumeCtrl", resumeCtrl);

    // inviteCtrl.$inject = [];

    function resumeCtrl() {

        var vm = this;

        activate();

        function activate() {
            console.log("Landing.")
        }
    }
}());