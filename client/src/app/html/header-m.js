'use strict';

angular.module('eventApp')
    .controller('header', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $scope.logout = function(){
            if (confirm("로그아웃 하시겠습니까?")) {
                sessionStorage.setItem('aaa', 2);
                location.href = "/";
            }
        }

        $scope.reset = function(){

        }
    });