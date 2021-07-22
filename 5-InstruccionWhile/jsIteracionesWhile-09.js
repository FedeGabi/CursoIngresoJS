/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var seguir;
	var numMin;
	var numMax;
	var bandera;

	seguir=true;
	bandera=true;

		while(seguir==true)
		{
			numeroIngresado= prompt("ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);

			if(bandera==true)
			{
				numMax=numeroIngresado;
				numMin=numeroIngresado;

				bandera=false;
			}
			else
			{
				if(numeroIngresado>numMax)
				{
					numMax=numeroIngresado;
				}
				if(numeroIngresado<numMin)
				{
					numMin=numeroIngresado;
				}
			}
			seguir=confirm("¿ingresar otro numero?")
		}
	document.getElementById("txtIdMaximo").value=numMax;
	document.getElementById("txtIdMinimo").value=numMin;
	
	

}//FIN DE LA FUNCIÓN