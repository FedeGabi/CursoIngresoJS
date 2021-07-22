function mostrar()
{
	
	var numeroIngresado;
	var contador;
	var suma;

	contador=0;
	suma =0;

	while(contador<5)
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		 
		while(isNaN(numeroIngresado) || (numeroIngresado<0 || numeroIngresado>100));
		{
			numeroIngresado=prompt("ingrese numero valido entre 0 y 100");
			numeroIngresado=parseInt(numeroIngresado);
		}
		suma=suma+numeroIngresado;

		contador=contador+1;
	}

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=suma/contador;

	

}//FIN DE LA FUNCIÓN