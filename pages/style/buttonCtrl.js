app.controller('buttonCtrl', function ($scope, $routeParams) {
    $scope.clickFunc = function () {
        //alert('22ddd2');
        alert( $('button').length );
        console.log( $ );
        //$('button').removeClass('btn-blue');
    };
});