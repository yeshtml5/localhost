var app = angular.module('localApp', ['ngRoute']);
/*==================================================
   Router
==================================================*/
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/pages/main/index.html',
        controller: 'mainCtrl'
    }).when('/ajax', {
        templateUrl: '/pages/ajax/list.html',
        controller: 'listCtrl'
    }).when('/view/:id', {
        templateUrl: '/pages/ajax/view.html',
        controller: 'viewCtrl'
    }).when('/button', {
        templateUrl: '/pages/style/button.html',
        controller: 'buttonCtrl'
    }).when('/util', {
        templateUrl: '/pages/util/limit.html',
        controller: 'limitCtrl'
    }).when('/error', {
        templateUrl: '/pages/etc/error.html',
        controller: 'buttonCtrl'
    }).otherwise({
        redirectTo: '/error'
    });
});
/*==================================================
   Templete
==================================================*/
app.directive('ngHeader', function () {
    return {
        templateUrl: '/template/header.html'
    }
});
app.directive('ngFooter', function () {
    return {
        templateUrl: '/template/footer.html'
    }
});
/*==================================================
   Controller
==================================================*/
app.controller('localCtrl', function ($scope) {
    $scope.title = "이것은 페이지 타이틀이다.";
    $scope.menu1 = "dkdd";
});

// create the controller and inject Angular's $scope
app.controller('mainCtrl', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});


