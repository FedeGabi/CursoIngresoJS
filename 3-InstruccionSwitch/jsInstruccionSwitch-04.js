function mostrar()
{
	//tomo el mes
	var mes
	
	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
		case "MArzo":
		case "Mayo":
		case "Julio":
		case "agosto":
		case "Octubre":
		case "Diciembre":
			alert("Si tiene 31 dias");
		break;
		case "Junio":
		case "Septiembre":
		case "Abril":
		case "Noviembre":
			alert("Si tiene 30 dias");
			break;
		default:
			alert("Si tiene 28 dias")
	}
	
	
	



}//FIN DE LA FUNCIÓN Enero, marzo, mayo, julio, agosto, octubre y diciembre