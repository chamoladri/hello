var express = require("express");
var http  = require("http");
var five = require("johnny-five");
var app = express();
var led;
var exposures=[100,500,1000,3000,4000,5000];

//sirvce el contenido estatico 
//en la carpeta static
app.use(express.static("static/"));

//rutas
app.get('/start', function(req, res){
	
	res.contentType('json');
	
	board.wait(exposures[i],function() {
	
		for (var i = 0; i < exposures.length; i++) {
			tomarFoto(300,exposures[i]);
		};

	}
	
	 
	res.send({'status':'running'});
});


app.get('/mauro', function(req, res){
	console.log("iniciando proceso led");
	res.contentType('json');
	ledTriguer.off();
	ledShutter.off();
	res.send({'status':'stopped'});
});

app.get('/lista', function(req, res){
	console.log("iniciando proceso led");
	res.contentType('json');
	res.send({'status':'lista222'});

});




// inicia el la arduino y declara los pines 
board = new five.Board();
board.on("ready", function(){
	ledTriguer = new five.Led({
		pin: 12
	});
	ledShutter = new five.Led({
		pin: 11
	});
	//inicia el server y escucha por el 3000
	http.createServer(app).listen(3000);
});


 function tomarFoto (tiempoDisparo,tiempoExpocicion){
	
		ledTriguer.on();
		ledShutter.on();
  		board.wait(tiempoDisparo,function() {
		ledTriguer.off();
    
    });

  		board.wait(tiempoExpocicion,function() {
		ledShutter.off();

  	});

}




	 
	
