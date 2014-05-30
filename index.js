var express = require("express");
var http  = require("http");
var five = require("johnny-five");
var app = express();
var led;

//sirvce el contenido estatico 
//en la carpeta static
app.use(express.static("static/"));

var sayhello = function(){
	console.log("hello panobot");
}

//rutas
app.get('/start', function(req, res){
	sayhello();
	res.contentType('json');
	led.on();
	res.send({'status':'running'});
});


app.get('/mauro', function(req, res){
	console.log("iniciando proceso led");
	res.contentType('json');
	led.off();
	res.send({'status':'stopped'});
});

board = new five.Board();

board.on("ready", function(){
	led = new five.Led({
		pin: 13
	});
	//inicia el server y escucha por el 3000
	http.createServer(app).listen(3000);
});