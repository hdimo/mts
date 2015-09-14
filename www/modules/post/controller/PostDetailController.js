/**
 * Created by khaled on 9/13/15.
 */
angular.module('app.post')
    .controller('PostDetailController', ['$scope', '$stateParams', 'postService',
        function ($scope, $stateParams, postService) {
            $scope.pageTitle="Detail";
            console.log('details');
            var id = $stateParams.id;
            console.log(id+' id of post');

            $scope.post = postService.getPost(id);
            console.log($scope.post);

        }])
;