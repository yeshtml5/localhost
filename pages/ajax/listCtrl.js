/*
* https://stackoverflow.com/questions/22408790/angularjs-passing-data-between-pages
* */
angular.module('localApp').controller('listCtrl', function ($scope, ajaxStorage, $http) {

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
            //return false;
            $('a .btn-blue').bind('click', function (event) {
                event.preventDefault();
                var _os = $.getOs();
                console.log(_os);
            });
        });
    })($);
});

