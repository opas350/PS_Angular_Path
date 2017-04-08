/**
 * Created by javier.reyes.valdez on 4/7/2017.
 */

(function () {
    var module  = angular.module("githubViewer");
    
    var RepoController = function ($scope, $routeParam, github) {

        var reponame = $routeParam.reponame;
        var username = $routeParams.username;
    };

    module.controller("RepoController", RepoController);
});
