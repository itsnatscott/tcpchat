var chalk = require('chalk');
var net = require('net');
var fs = require('fs');
var port = 3000
var sockets = []
var userName =[]
var server = net.createServer();
var log = "";
//connect
server.on('connection', function(socket){
	socket.setEncoding('utf8');
	var j = sockets.length
	sockets.push(socket)
	userName.push("User" + sockets.length)
	console.log("connection established client:" + sockets.length);
	console.log(userName);
	socket.write("Connection established " + userName[sockets.length-1] + " " + "\n" + log);


// recieve data
	socket.on('data',function(data){
	var writer = userName[sockets.indexOf(socket)]
	log =log + writer + ": " + data.toString().trim()+"\n";
	
			

		//username change
		var tempData = data.toString().trim();
		var dataArray = tempData.split(" ");
		if (dataArray[0]==="/name/"){userName[sockets.indexOf(socket)]= dataArray[1]};
		
		
		//send text
		var clients = sockets.length;
		for (var i=0;i<clients;i++){
			if (sockets[i] != socket){
			sockets[i].write(chalk.green(writer) +": "+ data.toString().trim());
			console.log(data.toString().trim());
			console.log(userName[sockets.indexOf(socket)])
		
		//keeps chat log
		fs.writeFile("chatLog.txt",log,function(err){
			if(err){
				console.log(err);
			}
			else {
				console.log("logged")
			}
		});
		}}
	
	//deletes user after logout
	socket.on('end', function() {
    console.log('client disconnected');
    sockets.splice(sockets.indexOf(socket),1)
  });

	})
})
server.listen(3000,function(){ //'listening' listener
  console.log('listening on port ' + port );
});