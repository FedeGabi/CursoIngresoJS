/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{/*
	let importe;
	let resultado;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	resultado = importe * 0.25 + importe;

	document.getElementById("txtIdResultado").value = resultado;

*/


	let sueldo;
	let porcentaje;
	let resultado;


	sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	porcentaje = parseFloat(prompt("Ingrese porcentaje"));	

	resultado = (sueldo * porcentaje / 100) + sueldo;

	document.getElementById("txtIdResultado").value = resultado;


		

		



		//importe = txtIdImporte.value;
		//resultado = txtIdResultado.value; 

		//importe = parseFloat(importe);
		//resultado = parseFloat(resultado);

		//aumento = importe * 0.25;

		//resultado = importe + aumento;

		//txtIdResultado.value = resultado;

}


