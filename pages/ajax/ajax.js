angular.module('localApp').factory('ajaxStorage', function ($http) {
    var storage = {
        _data: null,
        load: function (url) {
            var info = $http.get(url).then(function (res) {
                //     console.log(res.data);
                return res.data;
            });
            return info;
        },
        get: function () {
            return storage._data
        },
        set: function (data) {
            storage._data = data;
        }

    }
    return storage;
});

/*
*  service , factory , provider
* */
