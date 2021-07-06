function mostrar()
{
	
		let edad;
		edad = parseInt(document.getElementById("txtIdEdad").value);

		
		if (edad < 13){

			alert("Sos niño")
		}
		else if (edad <= 17){

			alert("Sos adolescente")
		}
		else if (edad <= 65){

			alert("Sos adulto")
		}
		else {
			alert("Sos anciano")
		}
		








}//FIN DE LA FUNCIÓN