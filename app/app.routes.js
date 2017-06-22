module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/placeholder/placeholderView.html',
      controller: 'placeholderController'
    })
    .otherwise({redirectTo:'/'});
};
