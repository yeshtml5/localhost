angular.module('localApp').controller('buttonCtrl', function ($scope, $routeParams) {
    $scope.clickFunc = function () {
        //alert('22ddd2');
        alert($('button').length);
        document.title = 'test';
        //$('button').removeClass('btn-blue');
    };
});