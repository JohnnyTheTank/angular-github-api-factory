var app = angular.module("app", ['jtt_github']);
app.controller('controller', ['$scope', 'githubFactory', function($scope, githubFactory) {

    //var _access_token = "<YOUR_GITHUB_ACCESS_TOKEN>";
    var _access_token = "3448ed82e2f52693030ab139a3fef133a8b01853";

    githubFactory.getUser({
        user:"xremix",
        access_token:_access_token
    }).success(function(_data){
        console.info("user", _data);
    });

    githubFactory.getReposByUser({
        user:"xremix",
        per_page: 20,
        access_token:_access_token
    }).success(function(_data){
        console.info("repos by user", _data);
    });

    githubFactory.getReposByName({
        q:"apiNG-plugin",
        per_page: 20,
        access_token:_access_token
    }).success(function(_data){
        console.info("repos by name", _data);
    });

    githubFactory.getEventsByUser({
        user:"xremix",
        per_page: 20,
        access_token:_access_token
    }).success(function(_data){
        console.info("events by user", _data);
    });

    githubFactory.getEventsFromRepoByUserAndName({
        user:"xremix",
        repo:"xGallerify",
        per_page: 20,
        access_token:_access_token
    }).success(function(_data){
        console.info("events from repo by user and name", _data);
    });

    githubFactory.getRepoByUserAndName({
        user:"xremix",
        repo:"xGallerify",
        per_page: 20,
        access_token:_access_token
    }).success(function(_data){
        console.info("repo by user and name", _data);
    });


}]);
