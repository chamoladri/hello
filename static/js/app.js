$(document).ready(function(){
	console.log("documento cargado");
	$("#start").click(function(){
		console.log("bang!!");

		//peticion ajax por get
		$.ajax({
			url:"/start",
			dataType:"json",
			success:function(data ){
				//si obtenemos respuesta
				console.log("recibimos data" + JSON.stringify(data));
				//seleccionamos el elemento y inyectamos html
				$("#result").html(data.status);
				
			}
		})
	});

	$("#mauro").click(function(){
		console.log("led!!");

		//peticion ajax por get
		$.ajax({
			url:"/mauro",
			dataType:"json",
			success:function(data ){
				//si obtenemos respuesta
				console.log("recibimos data" + JSON.stringify(data));
				//seleccionamos el elemento y inyectamos html
				$("#result").html(data.status);
				
			}
		})
	});

});