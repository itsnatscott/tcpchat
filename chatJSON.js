var net = require('net');
var fs = require('fs');
var port = 3000
var sockets = []
var userName =[]
var server = net.createServer();
var log = "";
var logJson = JSON.stringify(log);
//connect
server.on('connection', function(socket){
	socket.setEncoding('utf8');
	var j = sockets.length
	sockets.push(socket)
	userName.push("User" + sockets.length)
	console.log("connection established client:" + sockets.length);
	console.log(userName);
	socket.write("connection established User:" + sockets.length);
//send recieve
	socket.on('data',function(data){
	log =log + data.toString().trim()+"\n";
		var clients = sockets.length;
		for (var i=0;i<clients;i++){
			if (sockets[i] != socket){
			sockets[i].write(data.toString().trim());
		//implement JSON
	
		}}

	})
})
server.listen(3000,function(){ //'listening' listener
  console.log('listening on port ' + port );
});