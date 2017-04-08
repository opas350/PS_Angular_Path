/**
 * Created by javier.reyes.valdez on 4/7/2017.
 */
(function () {

    var github = function ($http) {
        var getUser = function (username) {
            return $http.get("http://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };
        
        var getRepos = function (user) {
          return $http.get(user.repos_url)
              .then(function (response) {
                  return response.data;
              });
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github);
}());