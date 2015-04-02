'use strict';

angular.module('eventApp')
    .controller('curatorViewCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $(document).ready(function() {
            $(".cu-view .btn-purple").click(function() {
                $(".fa-volume-up").css("color","#b3c781");
                $(this).html("ON");
            });

        });

    });



