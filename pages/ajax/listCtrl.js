/*
* https://stackoverflow.com/questions/22408790/angularjs-passing-data-between-pages
* */
angular.module('app').controller('listCtrl', function ($scope, ajaxStorage, $http) {
    var ajax = "/src/json/list.json";
    $http.get(ajax).then(function (res) {
        //data
        $scope.lists = res.data;
        ajaxStorage.set($scope.lists);
    });

    $scope.clickFunc = function (list, index) {
        document.title = 'test';
        //$('button').removeClass('btn-blue');
    };
    (function ($) {
        $(document).ready(function () {
            //return false;
            $('a .btn-blue').bind('click', function (event) {
                event.preventDefault();

                //  console.log( ajaxStorage.get() );
                var _os = $.getOs();
                //console.log(_os);
            });
        });
    })($);
});

