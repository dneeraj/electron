myApp.controller('_vehicleCtrl_', ['$scope', '$filter', '$log', '$location','$routeParams','vehicleFactory', function(scope, filter, log, location,routeParams,vehicleFactory) {
 //hostService.setNodeHost($location.host());

console.log(' in _vehicleCtrl_');
console.log(JSON.stringify(routeParams));

scope.vehiclex = {};
scope.dummy = {};
scope.dummy.showWhat = routeParams.showWhat;

scope.showVehicle = function(vehicle){
scope.vehiclex = vehicle;
$('#modalVehicle').modal('show');
}


scope.showVehicles = function(){
  vehicleFactory.getVehiclesByCompanyID (1, function(err,data){
  scope.vehicleList = data.data; 

  }) 
   
 } //END showVehicles

//INIT

scope.showVehicles();

//$log.debug("Main controller called");  





}]);