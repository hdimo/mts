/**
 * Created by khaled on 8/25/15.
 */

angular.module('app.post')
    .controller('PostListController', ['$scope', '$state', 'postService',
        function ($scope, $state, postService) {
            $scope.pageTitle = "Article";
            $scope.listPost = postService.getAll();
            console.log('list post');
            console.log($scope.listPost);
            $scope.showPost = function (id){
                console.log(id);
                //$state.go('posts.post-detail({id:'+id+'})');
                $state.go('app.post.detail');
            }
        }])
;
