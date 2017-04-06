/**
 * Created by javier.reyes.valdez on 4/6/2017.
 */

(function () {

    var app = angular.module("githubViewer", []);

    var MainController = function($scope) {
        var person = {
            firstName: "opas350",
            lastName: "Z",
            imageSrc: "https://avatars1.githubusercontent.com/u/12703324?v=3&s=460"
        };
        $scope.message = "If you see this then Scope is working correctly";
        $scope.person = person;
    };
    app.controller("MainController", MainController);
}());