'use strict';

var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('panelCtrl', ['$scope', function($scope) {
    var vm = $scope.mv = {};
    $scope.query = '';
    $scope.orderProp = 'number';

    $scope.listData = [{
        name: "Node.JS",
        number: 1,
        url: "https://nodejs.org/",
        content: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
    }, {
        name: "Express",
        number: 2,
        url: "http://expressjs.com/",
        content: "Fast, unopinionated, minimalist web framework for Node.js"
    }, {
        name: "Angular.JS",
        number: 3,
        url: "https://angularjs.org/",
        content: "HTML enhanced for web apps!"
    }, {
        name: "Bootstrap",
        number: 4,
        url: "http://getbootstrap.com/",
        content: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web."
    }, {
        name: "JQuery",
        number: 5,
        url: "https://jquery.com/",
        content: "jQuery is a fast, small, and feature-rich JavaScript library."
    }, {
        name: "MongoDB",
        number: 6,
        url: "https://www.mongodb.org/",
        content: "MongoDB is an open-source, document database designed for ease of development and scaling. "
    }];
}]);

demoControllers.controller('testCtrl', ['$scope', function($scope) {
    $scope.test = "hello! this is test page!"
}]);

demoControllers.controller('navMenuCrtl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $scope.active = '';
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.home.title;
            $scope.content = $sce.trustAsHtml(data.home.content);
        });
        $scope.setMenuBtn = function(evt) {
            var elem = evt.currentTarget;
            $scope.item = elem.getAttribute('name');
            $http.get("json/themeInfo.json").success(function(data) {
                $scope.title = data[$scope.item].title;
                $scope.content = $sce.trustAsHtml(data[$scope.item].content);
            });
        };
    }
]);
