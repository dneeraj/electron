exports.saveUser = function(db, user, callback){

   
	var query = 'insert into tbl_user set ?';
	user.registered_on = (user.registered)?new Date():null;
 if(user.password) user.password = new Buffer(user.password).toString('base64');
 console.log('saveUser ' + JSON.stringify(user));
	var param = {
				fname:user.fname, 
				email:user.email,
				mobile:user.mobile,
				password:user.password,
				registered:user.registered,
				registered_on:user.registered_on
				};
	

	db.query(query , param, function(err, result) {
		if(err) {
			console.log(err);
			callback(err, null)
		}else{
			callback(null,result.insertId); 
			};
		}); //END DB QUERY  
} //END startTxn



exports.getUser = function(db, ID, callback){

  //	console.log(ID);
	var query = 'select * from tbl_user where ?';
	var param = {};
	if (ID.indexOf('@') > 0 ) param = {email:ID}
		else param = {mobile:ID}
	db.query(query , param, function(err, result) {
		if(err) {
			console.log(err);
			callback(err, null)
		}else{
			console.log(JSON.stringify(result));
			callback(null,result[0]); 
			};
		}); //END DB QUERY  
} //END startTxn


exports.getUserByUID = function(db, uid, callback){

  //	console.log(ID);
	var query = 'select * from tbl_user where ?';
	var param = {uid:uid};
		
	db.query(query , param, function(err, result) {
		if(err) {
			console.log(err);
			callback(err, null)
		}else{
			console.log(JSON.stringify(result));
			callback(null,result[0]); 
			};
		}); //END DB QUERY  
} //END startTxn