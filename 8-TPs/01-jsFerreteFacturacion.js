/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    suma = precio1+precio2+precio3;

    alert("la suma es igual a " + suma)


}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    promedio= (precio1 + precio2 + precio3) /3;

    alert("el promedio es : " +promedio.toFixed(2))

}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let iva;
    let precioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    iva= (precio1+precio2+precio3) * 21/100;
    precioFinal = (precio1+precio2+precio3) - iva;

    alert("El precio final es: "+precioFinal )


}