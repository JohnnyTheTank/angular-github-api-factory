var app = angular.module("app", ['jtt_github']);
app.controller('controller', ['$scope', 'githubFactory', function($scope, githubFactory) {

    githubFactory.getUser({
        user:"xremix",
    }).then(function(_data){
        console.info("user", _data);
    });


    githubFactory.getReposByUser({
        user:"JohnnyTheTank",
        per_page: 100,
    }).success(function(_data){
        console.info("repos by user", _data);
    });


    githubFactory.getReposByName({
        q:"apiNG-plugin",
        per_page: 20,
    }).then(function(_data){
        console.info("repos by name", _data);
    });


    githubFactory.getEventsByUser({
        user:"xremix",
        per_page: 20,
    }).then(function(_data){
        console.info("events by user", _data);
    });

    githubFactory.getEventsFromRepoByUserAndName({
        user:"JohnnyTheTank",
        repo:"apiNG",
        per_page: 100,
    }).then(function(_data){
        console.info("events from repo by user and name", _data);
    });

    githubFactory.getRepoByUserAndName({
        user:"xremix",
        repo:"xGallerify",
        per_page: 20,
    }).then(function(_data){
        console.info("repo by user and name", _data);
    });


}]);
