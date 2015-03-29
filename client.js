var net = require('net');
var fs = require('fs');
var client = net.Socket();
client.connect(3000, function() {
  client.write("");
  client.on('data', function(data){
    console.log(data.toString().trim());

process.stdin.on('readable', function() {
  var crunk = process.stdin.read();
  if (crunk !== null) {
    client.write(' '+crunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});










  });

  client.on('end', function() {
    console.log('disconnected from server')
  });
});