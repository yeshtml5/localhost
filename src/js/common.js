/**/
function test() {
    alert('common test');
}

angular.module('app').controller('common', function ($scope) {
    $scope.selectOn = function (event) {
        alert('2');
    }
});


(function ($) {
    $(document).ready(function () {

    });
})($);