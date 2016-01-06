**angular-github-api-factory** is an angularjs module with a github api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-github-api-factory`
2. Add `jtt_github` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-github-api-factory/src/angular-github-api-factory.js"></script>
    ```

4. Use the factory `githubFactory`


### factory methods

#### getUser
```js
githubFactory.getUser({
    user:"<USERNAME_NAME>",
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getRepo
```js
githubFactory.getRepoByUserAndName({
    user:"<USER_NAME>",
    repo:"<REPO_NAME>",
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getRepos
```js
// https://developer.github.com/v3/search/#search-repositories
githubFactory.getReposByName({
    q:"<SEARCH_STRING>",
    sort:"<SORT_STRING>", // (optional) 'stars', 'forks', or 'updated'
    order:"<SORT_ORDER>", // (optional) 'desc', 'asc'
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-100 | default: 30
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
githubFactory.getReposByUser({
    user:"<USER_NAME>",
    q:"<SEARCH_STRING>", // (optional)
    sort:"<SORT_STRING>", // (optional) 'stars', 'forks', or 'updated'
    order:"<SORT_ORDER>", // (optional) 'desc', 'asc'
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-100 | default: 30
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getEvents
```js
githubFactory.getEventsFromRepoByUserAndName({
    user:"<USER_NAME>",
    repo:"<REPO_NAME>",
    q:"<SEARCH_STRING>",  // (optional)
    sort:"<SORT_STRING>", // (optional)
    order:"<SORT_ORDER>", // (optional) 'desc', 'asc'
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-100 | default: 30
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
githubFactory.getEventsByUser({
    user:"<USER_NAME>",
    q:"<SEARCH_STRING>", // (optional)
    sort:"<SORT_STRING>", // (optional)
    order:"<SORT_ORDER>", // (optional) 'desc', 'asc'
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-100 | default: 30
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```


## Github JSON API

* docs: https://developer.github.com/v3/
* api playground: https://apigee.com/console/github


## License

MIT