var express = require("express");
var http  = require("http");
var app = express();

var status = false;
//sirvce el contenido estatico 
//en la carpeta static
app.use(express.static("static/"));

//rutas

app.get('/start', function(req, res){
	console.log("iniciando proceso");
	//var respuesta = {"res":"ok"};
	var dato = {'status':'stopped'};
	status = !status;
	res.contentType('json');
	if(status){
		dato = {'status':'running'};
	}else{
		dato = {'status':'stopped'};
	}
	res.send(dato);
});

//inicia el server y escucha por el 3000
http.createServer(app).listen(3000);