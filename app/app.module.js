require('angular');
require('angular-route');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-material');

var PlaceholderController = require('./components/placeholder/placeholderController');
var PlaceholderService = require('./components/placeholder/placeholderService');

var routes = require('./app.routes.js');

var placeholderDirective = require('./directives/placeholder/placeholderDirective');

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMaterial'])

.service('placeholderService', PlaceholderService)

.controller('placeholderController', ['$scope', 'placeholderService', PlaceholderController])

.directive('placeholder', placeholderDirective)

.config(routes);
