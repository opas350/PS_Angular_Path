/**
 * Created by javier.reyes.valdez on 4/7/2017.
 */

(function () {
    var module  = angular.module("githubViewer");

    var onRepo = function (data) {
        $scope.repo = data;
    };

    var onError = function (reason) {
        $scope.error = reason;
    };

    var RepoController = function ($scope, $routeParam, github) {

        var reponame = $routeParam.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    };

    module.controller("RepoController", RepoController);
});
