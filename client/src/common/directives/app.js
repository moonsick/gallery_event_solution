'use strict';

var app = angular.module('eventApp', [
    'ngRoute',
    'angularFileUpload',
    'ui.bootstrap',
    'ngCookies'
]);
app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/src/app/html/110_00_main/110-00-main.html'
            })
            /*.when('/kang', {
                redirectTo: '/'
            })*/
            .when('/introduction', {
                templateUrl: '/src/app/html/120_00_introduction/120-00-intro.html'
            })
            .when('/exhibiList', {
                templateUrl: '/src/app/html/130_00_gallery_information/030-00-exhibi-list.html'
            })
            .when('/exhibiView', {
                templateUrl: '/src/app/html/130_00_gallery_information/030-01-exhibi-view.html'
            })
            .when('/curatorList', {
                templateUrl: '/src/app/html/140_00_curator_information/040-00-curator-list.html'
            })
            .when('/curatorView', {
                templateUrl: '/src/app/html/140_00_curator_information/040-01-curator-view.html'
            })
            .when('/eventJoin', {
                templateUrl: '/src/app/html/150_00_event/050-00-event-join.html'
            })
            .when('/eventGift', {
                templateUrl: '/src/app/html/150_00_event/050-01-gift.html'
            })
            .when('/question', {
                templateUrl: '/src/app/html/160_00_question/060-00-survey.html'
            })
            /*.otherwise({
                redirectTo: '/'
            });*/

        $locationProvider.html5Mode(true);
    });

app.directive('ngConfirmClick', [
    function(){
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind('click', function(e){
                    var message = attrs.ngConfirmClick;
                    if(message && !confirm(message)){
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
    }
]);

