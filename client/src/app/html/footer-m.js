'use strict';

angular.module('eventApp')
    .controller('footerCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $scope.modalClick = function(number){

            if(number == 0){                            // number : 1 일시  메인 화면 이동
                location.href = "/";
            };
            if(number == 1){                            // number : 1 일시  전시품 이동
                location.href = "/exhibiList";
            };
            if(number == 2){                            // number : 2 일시  큐레이터 이동
                location.href = "/curatorList";
            };
            if(number == 3){                            // number : 3 일시  소개글 이동
                location.href = "/introduction";
            };
            if(number == 4){                            // number : 4 일시  특별이벤트 이동
                location.href = "/eventJoin";
            };
            if(number == 5){                            // number : 5 일시  설문조사사 이동
               location.href = "/question";
            };
        }
    });