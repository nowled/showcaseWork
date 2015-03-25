/**
 * Created by Robert on 3/25/2015.
 */


var myNameSpace = angular.module('movieApp', []);

myNameSpace.controller('MyController',function MyController($scope, $http) {
      $http.get('js/data.json').success(function(data){

          $scope.titles = data;
          //When I first open the movielist page
          //I want to have name show up in the input list first, so I will initialize it here
          $scope.artistOrder = 'name';

      });

    });


