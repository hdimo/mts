/**
 * Created by khaled on 8/18/15.
 */
angular.module('app.contact')
    .constant('END_POINT', 'http://ita.lan/api')
    //.constant('END_POINT', 'http://map-edini.rhcloud.com/api')
    .factory('endPointService', ['END_POINT', function (END_POINT) {
        return {
            listPosition: END_POINT + '/position',
            newPosiotn: END_POINT + '/new-position',
            contact: END_POINT + '/contact',
            ObjectToParams: function (obj) {
                var p = [];
                for (var key in obj) {
                    p.push(key + '=' + encodeURIComponent(obj[key]));
                }
                return p.join('&');
            }
        };
    }])
;