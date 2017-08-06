/**
 * Main AngularJS Web Application
 */
var app = angular.module('PIBWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeController"})

    // Eventos
    .when("/igreja/detalhe", {templateUrl: "partials/church-story-single.html", controller: "HomeController"})
    .when("/igreja/detalhe/generica", {templateUrl: "partials/church-story-single.html", controller: "HomeController"})

    // Eventos
    .when("/eventos", {templateUrl: "partials/events-grid.html", controller: "EventoController"})
    .when("/eventos/mulheres", {templateUrl: "partials/event-cong-mulheres.html", controller: "GenericPageCtrl"})

    //Galeria
    .when("/galeria", {templateUrl: "partials/gallery.html", controller: "GaleriaController"})

    //Sermoes
    .when("/sermoes", {templateUrl: "partials/sermon.html", controller: "SermoesController"})

    //Ministerios
    .when("/ministerios", {templateUrl: "partials/ministry.html", controller: "MinisterioController"})
    .when("/ministerios/detalhe", {templateUrl: "partials/ministry-single.html", controller: "MinisterioController"})

    //Igreja
    .when("/igreja", {templateUrl: "partials/about.html", controller: "AboutController"})

    //Contato
    .when("/contato", {templateUrl: "partials/contact.html", controller: "ContatoController"})

    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "GenericPageCtrl"});
}]);
