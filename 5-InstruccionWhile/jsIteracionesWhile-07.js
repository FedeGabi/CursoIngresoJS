/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var suma;
	var seguir;
	var contador;

	suma=0;
	contador=0;
	seguir=true;

	while(seguir==true)
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		suma=suma+numeroIngresado;
			
		seguir=confirm("¿desea ingresar otro numero?")
			
		contador=contador+1;
	}
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=suma/contador;

}//FIN DE LA FUNCIÓN