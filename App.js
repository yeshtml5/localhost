var app = angular.module('localApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/pages/main.html',
        controller: 'mainCtrl'
    }).when('/button', {
        templateUrl: '/pages/style/button.html',
        controller: 'buttonCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
app.controller('localCtrl', function ($scope) {
    $scope.menu1 = "dkdd";
});

// create the controller and inject Angular's $scope
app.controller('mainCtrl', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});


