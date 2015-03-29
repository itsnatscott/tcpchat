var net = require("net");  //<--node protocall for internet connectivity
var port = 3000;   //<--designates port
var server= net.createServer(function(socket){     //<--creates server
	console.log("client connected")			   //  runs 
	socket.write("hello client");			   //  everytime
	//sends stuff to client					   //  client connects

///SEND RECIEVE
  socket.on('data', function(data) {
    console.log(data.toString().trim());
    mem = (data.toString().trim()+"\n");
    console.log(mem)
  });

  
  socket.on('end', function() {
    console.log('client disconnected');
  });
});



server.listen(port,function(){
	console.log("Listening on port" + port);   // waits for client interaction
});