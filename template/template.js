/*

 */

/*==================================================
   header
==================================================*/
angular.module('localApp').controller('headerCtrl', function ($scope) {
    $scope.navFunc = function () {

    }
});
/*==================================================
   footer
==================================================*/
angular.module('localApp').controller('footerCtrl', function ($scope) {
    $scope.footerFunc = function () {
        alert('2');
    }
})