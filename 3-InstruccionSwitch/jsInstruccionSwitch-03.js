function mostrar()
{
	
	var mes 

	mes = document.getElementById("txtIdMes").value;

	/*switch(mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
		break;
		default:
			alert("Este mes tiene 30 o mas dias");

	}	
	*/
	if(mes != "Febrero"){
		alert("este mes tiene 30 o mas dias");
	}
	else{
		alert("este mes no tiene mas de 29 dias");
	}


}//FIN DE LA FUNCIÓN