var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , url = require('url')
 
app.listen(8080);
 
function handler (req, res) {
	// parse URL
	var requestURL = url.parse(req.url, true);
 
	// if there is a message, send it
	if(requestURL.query.message)
		sendMessage(decodeURI(requestURL.query.message));
 
	// end the response
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Server Running');
	res.end("");
}
 
function sendMessage(message) {
	io.sockets.emit('notification', {'message': message});

}
