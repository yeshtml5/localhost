/*

 */

/*==================================================
   header
==================================================*/
angular.module('localApp').controller('headerCtrl', function ($scope) {




    $scope.navFunc = function () {
        //최상위
        $scope.common();
    }

    function headerInit() {
        $('header a.tit').on('click', function (event) {
            console.log($.version)
            $(this).addClass('on').siblings().removeClass('on');
        });
    };
    // headerInit();


});
/*==================================================
   footer
==================================================*/
angular.module('localApp').controller('footerCtrl', function ($scope) {
    $scope.footerFunc = function () {
        alert('2');
    }
});
/*==================================================
   jQuery
==================================================*/
