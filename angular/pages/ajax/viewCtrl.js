angular.module('app').controller('viewCtrl', function ($scope, $routeParams, $location, $http) {
    var url = $location.path();
    $scope.index = $routeParams.id;
    $scope.url = $location.path();

    var ajax = "/angular/json/list.json";
    $http.get(ajax).then(function (res) {
        //data
        var _info = res.data[$scope.index];
        $scope.info = _info;
        $scope.img = _info.img;

    });


    // console.log($routeParams.lists);
    //console.log("-----");

//    $scope.name = $location.id;
});