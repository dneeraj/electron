myApp.factory('vehicleFactory', function($http){

  return{
    
  
getVehicleByRecordID: function(vehicle_rec_id, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'vehicle/';
 var http_url = http_url1 + 'byRecordID/' + vehicle_rec_id;   

  $http.get(http_url)
.success(function(data) {
  
callback(null, data);  

  }).error(function(err) {
    callback(err, null);
      }) ;
}, //getvehicle END 
  getVehiclesByCompanyID: function(company_id, callback){
 
 var http_url = '/api/vehicle/all/1';  

  $http.get(http_url)
.success(function(data) {
  
callback(null, data);  

  }).error(function(err) {
    callback(err, null);
      }) ;
}, //getvehiclebyCompanyID END    
  searchVehicle: function(txt, callback){
    txt = txt.replace('/','%2F');
 var http_url1 = hostService.getNodeServiceURL() + 'vehicle/search/';
 var http_url = http_url1 + txt ;   
  $http.get(http_url)
.success(function(data) {
  
callback(null, data.data);  

  }).error(function(err) {
    callback(err, null);
      }) ;
}, //searchVehicle END
getVehiclesByExpDuration: function(duration, callback){
    
 var http_url1 = hostService.getNodeServiceURL() + 'vehicle/byExpDuration/';
 var http_url = http_url1 + duration ;  
  $http.get(http_url)
.success(function(data) {
  
callback(null, data); 

  }).error(function(err) {
    callback('ERROR -' + err, null);
      }) ;
} //

    
    }//return end
});