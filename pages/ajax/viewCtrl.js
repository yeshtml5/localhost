angular.module('localApp').controller('viewCtrl', function ($scope, $routeParams, $location) {
    var url = $location.path();
    $scope.index = $routeParams.id;
    $scope.url = $location.path();

    console.log("-----");

//    $scope.name = $location.id;
});