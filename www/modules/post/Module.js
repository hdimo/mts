'use strict';
angular.module('app.post', [])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.post.list', {
                    url: '',
                    templateUrl: 'modules/post/view/post-list.html'
                })

                .state('app.post.detail', {
                    url: '/detail',
                    params:{
                        id:null
                    },
                    templateUrl: 'modules/post/view/post-detail.html'
                });
        }])
;
