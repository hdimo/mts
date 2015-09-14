/**
 * Created by khaled on 8/18/15.
 */
angular.module('app.photo')

    .controller('PhotoController', ['$scope', '$state', 'pictureService', '$timeout',
        function ($scope, $state, pictureService, $timeout) {

            //take pictures
            $scope.imageSource='';
            $scope.takePicture = function () {
                pictureService.takePicture().then(function(src){
                    $scope.imageSource = src;
                });
            };

            $timeout(function(){
                console.log('progress launched');
            }, 1000);

        }])
;