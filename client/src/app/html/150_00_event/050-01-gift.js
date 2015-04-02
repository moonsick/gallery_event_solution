'use strict';

angular.module('eventApp')
    .controller('eventJoinCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $(document).ready(function() {
            $(".box").click(function() {
                $('.gift').addClass("bounceInUp");
                $(".box img").animate({
                    opacity : 0.1
                }, 1000);
            });
        });
    });
