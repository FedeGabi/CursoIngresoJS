/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	
	sexoIngresado=prompt("Ingrese sexo con f o m")

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		alert("sexo incorrecto, ingrese nuevamente")
		sexoIngresado=prompt("ingrese sexo con f o m")
	}
	if(sexoIngresado =="f")
	{
	document.getElementById("txtIdSexo").value="el sexo femenino es valido"
	}
	else
	{
		document.getElementById("txtIdSexo").value="el sexo masculino es valido"
	}
	
}//FIN DE LA FUNCIÓN