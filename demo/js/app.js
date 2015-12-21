var app = angular.module("app", ['jtt_github']);
app.controller('controller', ['$scope', 'githubFactory', function($scope, githubFactory) {

    var _access_token = '<YOUR_GITHUB_ACCESS_TOKEN>';

    githubFactory.getUser({
        user:"xremix",
        access_token:_access_token
    }).success(function(_data){
        console.info("user", _data);
    });

    githubFactory.getReposByUser({
        user:"JohnnyTheTank",
        per_page: 100,
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
        user:"JohnnyTheTank",
        repo:"apiNG",
        per_page: 100,
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
