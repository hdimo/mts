/**
 * Created by khaled on 9/14/15.
 */


angular.module('app.post')
.controller('PostCreateController', ['$scope', 'pictureService',
        function ($scope, pictureService) {
            $scope.pageTitle = "Ajouter un article";
            $scope.imageSource='';
            $scope.takePicture = function () {
                pictureService.takePicture().then(function(src){
                    $scope.imageSource = src;
                });
            };
        }])
;