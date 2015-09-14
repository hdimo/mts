/**
 * Created by khaled on 9/7/15.
 */
angular.module('app.photo')
.factory('pictureService', ['$cordovaCamera', function ($cordovaCamera) {


        var options = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
        };

        //take picture
        function takePicture(){
            return $cordovaCamera.getPicture(options).then(function(imageURI) {
                return imageURI;
            }, function(err) {
                console.error(err);
            });
            //clean memory
            $cordovaCamera.cleanup();
        };

        return {

            takePicture : takePicture

        };

    }])
;