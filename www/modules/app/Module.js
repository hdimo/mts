'use strict';
angular.module('app.main', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'modules/app/view/menu.html',
                controller: 'MenuController'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'modules/app/view/home.html'
                    }
                }
            })

            .state('app.about', {
                url: '/about',
                views: {
                    'menuContent': {
                        templateUrl: 'modules/app/view/about.html'
                    }
                }
            })

            .state('app.contact', {
                url: '/contact',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'modules/contact/view/contact.html'
                    }
                }
            })

            .state('app.photo', {
                url: '/photo',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'modules/photo/view/photo.html'
                    }
                }
            })

            .state('app.post', {
                url: '/post',
                abstract:true,
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'modules/post/view/post-main.html'
                    }
                }
            })
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    })
;
