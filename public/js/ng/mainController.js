'use strict'

var myApp = angular.module('myApp',['ngRoute','smart-table']);


myApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider
   .when('/dashboard', {
   templateUrl: 'ngv/dashboard.html',
    controller: '_dashboardCtrl_'
  }).when('/myFleet/:showWhat/:number', {
   templateUrl: 'ngv/myFleet.html',
    controller: '_vehicleCtrl_'
  }).otherwise({
       templateUrl: 'ngv/dashboard.html',
    controller: '_dashboardCtrl_'
      })
    
  ;
}]);


myApp.directive('vehicleModal', function() {
  return { restrict: 'E',
   templateUrl: 'ngv/modalVehicle.html'};
  });

myApp.directive('vehicleList', function() {
  return { restrict: 'E',
   templateUrl: 'ngv/divVehicleList.html'};
  });


myApp.controller('_mainCtrl_', function($scope, $log) {
 //hostService.setNodeHost($location.host());


$log.debug(" in Main controller ");  
});