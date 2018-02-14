/*
* https://stackoverflow.com/questions/22408790/angularjs-passing-data-between-pages
* */
angular.module('localApp').controller('listCtrl', function ($scope, ajaxStorage, $http) {
    var obj = ajaxStorage.load('/src/json/list.json');

    console.log(obj.data);
    var ajax = "/src/json/list.json";


    $http.get(ajax).then(function (res) {
        //data
        $scope.lists = res.data;

    });

    $scope.clickFunc = function (list, index) {
        console.log('------');
        console.log(index);
        document.title = 'test';

        //$('button').removeClass('btn-blue');
    };
    (function ($) {
        $(document).ready(function () {
            return false;
            $('li img').bind('click', function (event) {
                event.preventDefault();
                var _os = $.getOs();
                console.log(_os);
            });
        });
    })($);
});

