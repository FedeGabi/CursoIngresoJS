
function mostrar()
{
	var i;
	var producto;
	var precio;
	var minimoPrecioAlcohol;
	var acumuladorAlcoholBarato;
	var flagAlcohol;
	var acumuladorPrecioAlcohol;
	var acumuladorUnidadesAlcohol;
	var contadorAlcohol;
	var acumuladorPrecioBarbijo;
	var acumuladorUnidadesBarbijo;
	var conatdorBarbijo;
	var acumuladorPrecioJabon;
	var acumuladorUnidadesJabon;
	var contadorJabon;

	flagAlcohol=true;
	i=0;

	acumuladorAlcoholBarato=0;
	acumuladorUnidadesAlcohol=0;
	acumuladorPrecioAlcohol=0;
	contadorAlcohol=0;
	acumuladorUnidadesBarbijo=0;
	acumuladorPrecioBarbijo=0;
	conatdorBarbijo=0;
	acumuladorUnidadesJabon=0;
	acumuladorPrecioJabon=0;
	contadorJabon=0;

	while(i<5)
	{
		producto=prompt("ingrese producto")
		while(producto!="barbijo" && producto!= "jabon" && producto!="alcohol")
		{
			producto=prompt("ingrese producto valido")
		}
		precio=prompt("ingrese precio")
		precio=parseInt(precio)
		while(precio<100 || precio>300)
		{
			precio=prompt("ingrese precio valido entre 100 y 300")
			precio=parseInt(precio)
		}
		unidades=prompt("ingrese unidades")
		unidades=parseInt(unidades)
		while(unidades<1 || unidades>1000)
		{
			unidades=prompt("ingrese unidades validas no mayores a 1000")
			unidades=parseInt(unidades)
		}
		marca=prompt("ingrese marca")
		fabricante=prompt("ingrese fabricante")

		while(flagAlcohol==true && producto=="alcohol")
		{
			minimoPrecioAlcohol=precio;
			acumuladorAlcoholBarato=acumuladorAlcoholBarato+unidades;
			fabricanteAlcohol=fabricante;
			flagAlcohol=false;
		}
		if(producto=="alcohol" && precio<minimoPrecioAlcohol)
		{
			minimoPrecioAlcohol=precio;
			acumuladorAlcoholBarato=acumuladorAlcoholBarato+unidades;
			fabricanteAlcohol=fabricante;
		}
		switch(producto)
		{
			case "alcohol":
				acumuladorUnidadesAlcohol=acumuladorUnidadesAlcohol+unidades;
				acumuladorPrecioAlcohol=acumuladorPrecioAlcohol+precio;
				contadorAlcohol++;
				break;
			case "barbijo":
				acumuladorUnidadesBarbijo=acumuladorUnidadesBarbijo+unidades;
				acumuladorPrecioBarbijo=acumuladorPrecioBarbijo+precio;
				conatdorBarbijo++;
				break;
			case "jabon":
				acumuladorUnidadesJabon=acumuladorUnidadesJabon+unidades;
				acumuladorPrecioJabon=acumuladorPrecioJabon+precio;
				contadorJabon++;
				break;				
		}
		i++;
	}
	document.write("del alcohol mas barato las unidades fueron: "+acumuladorAlcoholBarato+" y el fabricante es: "+fabricanteAlcohol+"<br>")
	if(acumuladorUnidadesAlcohol>acumuladorUnidadesBarbijo && acumuladorUnidadesAlcohol>acumuladorUnidadesJabon)
	{
		document.write("alcohol fue el producto con mayor unidades y el promedio por compra es de:" +acumuladorUnidadesAlcohol/contadorAlcohol+" unidades por comrpa"+ "<br>")
	}
	else
	{
		if(acumuladorUnidadesBarbijo>acumuladorUnidadesAlcohol)
		{
			document.write("barbijo fue el producto con mayor unidades y el promedio por compra es de:" +acumuladorUnidadesBarbijo/conatdorBarbijo+" unidades por compra"+"<br>")
		}
		else
		{
			document.write("Jabon fue el producto con mayor unidades y el promedio por compra es de:" +acumuladorUnidadesJabon/contadorJabon+" unidades por compra"+"<br>")
		}
	}
	document.write("la cantidad de unidades de jabones es"+acumuladorUnidadesJabon)
}
