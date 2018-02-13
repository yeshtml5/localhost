angular.module('localApp').factory('ajaxStorage', function ($http) {
    var storage = {
        data: [
            {
                "key": "1",
                "name": "한가인",
                "sex": "female",
                "img": "/src/images/data/img1.jpg",
                "token": "100,000",
                "buy": "100",
                "sell": "120",
                "tag": "#여자#결혼했음#부럽#요즘뭐하는지",
                "callback": "callback1"
            },
            {
                "key": "2",
                "name": "원빈",
                "sex": "male",
                "img": "/src/images/data/img2.jpg",
                "token": "3,100,000",
                "buy": "1,300",
                "sell": "10",
                "tag": "#남자#결혼했음#부럽#요즘뭐하는지#존잘",
                "callback": "callback2"
            }],
        load: function () {
            var ajax = "/src/json/list.json";
            $http.get(ajax).then(function (res) {
                //data
                storage.data = res.data;
                storage.get();
            });
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
