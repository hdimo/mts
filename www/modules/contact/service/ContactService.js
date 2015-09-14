/**
 * Created by khaled on 8/18/15.
 */
angular.module('app.contact')
    .factory('contactService', ['$http', 'endPointService',
        function ($http, endPointService) {
            return {
                sendMessage: function (message) {
                    return $http({
                        method: "post",
                        url: endPointService.contact,
                        data: endPointService.ObjectToParams(message),
                        headers: {'Content-Type': 'multipart/form-data'}
                    }).success(function (response) {
                        console.log(response);
                        console.log('data sent');
                    });
                }
            };

        }])
;