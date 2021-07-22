/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let i;
	i=9;

	while(i<10 && i>-1){
		document.write(i+1);
		i--;
	}
	alert('iteración while');

}//FIN DE LA FUNCIÓN