/**
 * Created by khaled on 8/25/15.
 */

angular.module('app.main')
    .controller('HomeController', ['$scope',
        function ($scope) {

            $scope.pageTitle = "Accueil";

            $scope.slideHasChanged = function (index) {
                console.log(index);
            };
        }])
;
