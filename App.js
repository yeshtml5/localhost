function log(msg) {
    console.log('%c' + msg + '', 'padding:1px; color:#bada55; font-size:14px; background:#222;');
}

var app = angular.module('localApp', ['ngRoute']);
/*==================================================
   Router
   controller 표시 2번호출됨.
==================================================*/
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/pages/main/index.html',
        controller: 'mainCtrl'
    }).when('/ajax', {
        templateUrl: '/pages/ajax/list.html'
    }).when('/view/:id', {
        templateUrl: '/pages/ajax/view.html'
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
   directive
==================================================*/
app.directive('siblingsOn', function () {
    return {
        scope: true,
        link: function (scope, element, attrs) {
            scope.addClassOn = function () {
                element.siblings().removeClass('on');
                element.addClass('on');
            }
        }
    }
});
app.directive('ngHeader', function () {
    return {
        templateUrl: '/template/header.html'
    }
});
app.directive('ngFooter', function () {
    return {
        templateUrl: '/template/footer.html'
        /*
        template: "<ng-include src='getTemplateUrl()'/>",
        scope: {
            user: "= data"
        },
        restrict: "E",
        controller: function ($scope) {
            var _url = window.location.href;
            console.log(_url);
            var _condition = (_url == 'http://localhost/#!/ajax') ? true : false;
            $scope.getTemplateUrl = function () {
                if (_condition) {
                    return '/template/header.html';
                } else {
                    return '/template/footer.html';
                }
            }
        }
        */
    }
});
/*==================================================
   Controller $rootScope
==================================================*/
app.controller('localCtrl', function ($scope) {


    $scope.common = function () {
        log('commo1n');
    }
});

// create the controller and inject Angular's $scope
app.controller('mainCtrl', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
/*==================================================
   common
==================================================*/

