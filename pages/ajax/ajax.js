angular.module('localApp').factory('ajaxStorage', function ($http) {
    var storage = {
        load: function (url) {
            var info = $http.get(url).then(function (res) {
           //     console.log(res.data);
                return res.data;
            });
            return info;
        },
        get: function () {
            return storage.data;
        }

    }
    return storage;
});

/*
*  service , factory , provider
* */
