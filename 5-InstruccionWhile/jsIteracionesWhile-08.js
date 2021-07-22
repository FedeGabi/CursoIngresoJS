/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	var numeroIngresado;
	var seguir;
	var suma;
	var producto;

	seguir=true;
	suma=0;
	producto=1;

	while(seguir==true)
	{
		numeroIngresado= prompt("ingrese numero");
		numeroIngresado=parseFloat(numeroIngresado);
		if(numeroIngresado<0)
		{
			producto=producto*numeroIngresado;
		}
		else
		{
			suma=suma+numeroIngresado;
		}
		seguir=confirm("¿ingresar otro numero?")
	}	
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdProducto").value=producto;
	

}//FIN DE LA FUNCIÓN