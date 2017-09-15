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

    //Parceiros
    .when("/abni", {templateUrl: "partials/abni_detalhe.html", controller: "HomeController", cache: false})
    .when("/canaa", {templateUrl: "partials/canaa_detalhe.html", controller: "HomeController", cache: false})

    // Eventos
    .when("/igreja/detalhe", {templateUrl: "partials/church-story-single.html", controller: "HomeController", cache: false})
    .when("/igreja/detalhe/generica", {templateUrl: "partials/church-story-single-generica.html", controller: "HomeController", cache: false})

    // Eventos
    .when("/eventos", {templateUrl: "partials/events-grid.html", controller: "EventoController", cache: false})
    .when("/eventos/mulheres", {templateUrl: "partials/event-cong-mulheres.html", controller: "GenericPageCtrl", cache: false})

    //Galeria
    .when("/galeria", {templateUrl: "partials/gallery.html", controller: "GaleriaController", cache: false})

    //Sermoes
    .when("/sermoes", {templateUrl: "partials/sermon.html", controller: "SermoesController", cache: false})

    //Agenda Semanal
    .when("/agenda", {templateUrl: "partials/agenda.html", controller: "AgendaController", cache: false})

    //Ministerios
    .when("/ministerios", {templateUrl: "partials/ministry.html", controller: "MinisterioController", cache: false})
    .when("/ministerios/detalhe", {templateUrl: "partials/ministry-single.html", controller: "MinisterioController", cache: false})

    //Igreja
    .when("/igreja", {templateUrl: "partials/about.html", controller: "AboutController", cache: false})

    //Contato
    .when("/contato", {templateUrl: "partials/contact.html", controller: "ContatoController", cache: false})

    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "GenericPageCtrl", cache: false});
}]);
