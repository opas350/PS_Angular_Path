/**
 * Created by javier.reyes.valdez on 4/6/2017.
 */

(function () {

    var app = angular.module("githubViewer");

    var MainController = function(
        $scope, $interval, $location) {

        var decrementCountdown = function () {
            $scope.countdown--;
            if($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var countDownInterval = null;
        var startCountdown = function () {
            countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (username) {
            if(countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };
        $scope.username = "angular";
        $scope.countdown = 10;
        startCountdown();
    };
    app.controller("MainController",MainController);
}());