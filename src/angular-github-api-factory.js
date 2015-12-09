"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/angular-github-api-factory
 @licence MIT
 */

angular.module("jtt_github", [])
    .factory('githubFactory', ['$http', 'githubSearchDataService', function ($http, githubSearchDataService) {

        var githubFactory = {};

        getRepoByUserAndNamegithubFactory.getUser = function (_params) {
            var searchData = githubSearchDataService.getNew("user", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        githubFactory.getReposByUser = function (_params) {
            var searchData = githubSearchDataService.getNew("reposByUser", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        githubFactory.getReposByName = function (_params) {
            var searchData = githubSearchDataService.getNew("reposByName", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        githubFactory.getRepoByUserAndName = function (_params) {
            var searchData = githubSearchDataService.getNew("repoByUserAndName", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        githubFactory.getEventsByUser = function (_params) {
            var searchData = githubSearchDataService.getNew("eventsByUser", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        githubFactory.getEventsFromRepoByUserAndName = function (_params) {
            var searchData = githubSearchDataService.getNew("eventsFromRepoByUserAndName", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        return githubFactory;
    }])
    .service('githubSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "https://api.github.com/";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if (typeof _params[value] !== "undefined") {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var default_per_page = 20;

            var githubSearchData = {
                object: {},
                url: "",
            };

            switch (_type) {
                case "user":
                    githubSearchData.object = {
                        access_token: _params.access_token,
                    };
                    githubSearchData = this.fillDataInObjectByList(githubSearchData, _params, []);
                    githubSearchData.url = this.getApiBaseUrl() + "users/" + _params.user;
                    break;

                case "reposByUser":
                    githubSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || default_per_page
                    };
                    githubSearchData = this.fillDataInObjectByList(githubSearchData, _params, [
                        'q', 'sort', 'order', 'page'
                    ]);
                    githubSearchData.url = this.getApiBaseUrl() + "users/" + _params.user + "/repos";
                    break;

                case "reposByName":
                    githubSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || default_per_page
                    };
                    githubSearchData = this.fillDataInObjectByList(githubSearchData, _params, [
                        'sort', 'order', 'page'
                    ]);
                    githubSearchData.url = this.getApiBaseUrl() + "search/repositories?q=" + _params.q;
                    break;

                case "repoByUserAndName":
                    githubSearchData.object = {
                        access_token: _params.access_token,
                    };

                    githubSearchData = this.fillDataInObjectByList(githubSearchData, _params, []);

                    githubSearchData.url = this.getApiBaseUrl() + "repos/" + _params.user + "/" + _params.repo;
                    break;

                case "eventsByUser":
                    githubSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || default_per_page
                    };
                    githubSearchData = this.fillDataInObjectByList(githubSearchData, _params, [
                        'q', 'sort', 'order', 'page'
                    ]);
                    githubSearchData.url = this.getApiBaseUrl() + "users/" + _params.user + "/events";
                    break;

                case "eventsFromRepoByUserAndName":
                    githubSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || default_per_page
                    };
                    githubSearchData = this.fillDataInObjectByList(githubSearchData, _params, [
                        'q', 'sort', 'order', 'page'
                    ]);
                    githubSearchData.url = this.getApiBaseUrl() + "repos/" + _params.user + "/" + _params.repo + "/events";
                    break;


            }

            return githubSearchData;
        };
    });