angular.module('localApp').controller('listCtrl', function ($scope, $http) {
    var ajax = "/src/json/list.json";
    $http.get(ajax).then(function (res) {
        //data
        $scope.lists = res.data;
        console.log(res);
    });

    $scope.clickFunc = function (list, index) {
        console.log('------');
        console.log(index);
        document.title = 'test';

        //$('button').removeClass('btn-blue');
    };
});

