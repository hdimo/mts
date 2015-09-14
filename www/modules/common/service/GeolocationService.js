/**
 * Created by khaled on 9/7/15.
 */
angular.module('app.common')
    .factory('geoLocationService', ['$cordovaGeolocation', function ($cordovaGeolocation) {
        //get position
        function getPosition() {
            var posOptions = {timeout: 10000, enableHighAccuracy: false};
            return $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var pos = {};
                    pos.latitude = position.coords.latitude;
                    pos.longitude = position.coords.longitude;
                    return pos;
                }, function (err) {
                    console.error('Geolocation : ' + err);
                });
        }
        return {
            getPosition: getPosition
        };
    }])
;