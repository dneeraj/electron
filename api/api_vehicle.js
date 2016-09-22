var express = require('express');
var router = express.Router();
var vehList = require('../test/test_vehicle');


router.get('/all/:comapanyID', function(req,res){
  console.log("get all vehicles");
  console.log(vehList.vehiclelist);
  
     res.json(vehList.vehiclelist); 
  
}); // END ROUTER POST 

//FOUNDER INFO


module.exports = router;