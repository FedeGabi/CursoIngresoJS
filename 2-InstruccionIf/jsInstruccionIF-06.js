function mostrar()
{
	
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

		
	if (edad > 17){

		alert("Sos adulto");
	} 
	else {

	
		if (edad > 13){

		alert("Sos adolescente");
		}
		else {
		alert("Sos menor");
		}
	}
		








}//FIN DE LA FUNCIÓN