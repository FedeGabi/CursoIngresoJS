function mostrar()
{
	let mes

	mes = document.getElementById("txtIdMes").value;

	switch(mes){	
		case "Julio" :
		case "Agosto" :
			alert("Abrigate que hace frío")
		break;
		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
		case "Diciembre" :
			alert("Ya pasamos el frio ahora calor")
		break;
		default:
			alert("Falta para el invierno");
	}





}//FIN DE LA FUNCIÓN