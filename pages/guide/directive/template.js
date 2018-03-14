/*

 */

/*==================================================
   header
==================================================*/
angular.module('app').controller('headerCtrl', function ($scope) {
    $scope.navFunc = function (event) {
        var _target = $(event.target);
        var _index = _target.index();
        _target.addClass('on').siblings('a').removeClass('on');
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
angular.module('app').controller('footerCtrl', function ($scope) {
    $scope.footerFunc = function () {
        alert('2');
    }
});
/*==================================================
   jQuery
==================================================*/
