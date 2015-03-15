var app = angular.module('app', ['ui.bootstrap', 'ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url: "/",
        templateUrl: "app/feature/home/home.html",
        controller: "HomeController"
    }).state('login', {
        url: "/login",
        templateUrl: "app/feature/login/login.html"
    }).state('game_panel', {
        url: "/game_panel",
        templateUrl: "app/feature/login/login.html"
    }).state('game', {
        url: "/game",
        templateUrl: "app/feature/game/game.html",
        controller:"GameController"
    }).state('match', {
        url: "/match/:id",
        templateUrl: "app/feature/match/match.html",
        controller:"MatchController"
    });
});