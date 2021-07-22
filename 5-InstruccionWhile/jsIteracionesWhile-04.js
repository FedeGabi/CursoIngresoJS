/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>10)
	{
		
		numeroIngresado=prompt("error...reincrese numero");
		numeroIngresado=parseInt(numeroIngresado);

	}
	document.getElementById("txtIdNumero").value="el numero "+ numeroIngresado+" es valido";
	
	
		
}//FIN DE LA FUNCIÓN("")