/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    
	let sueldo;
	let iva;
	let resultado;

		sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
		iva = (sueldo * 10) / 100;
		resultado = sueldo + iva;

		document.getElementById("txtIdResultado").value = resultado;

	
}
