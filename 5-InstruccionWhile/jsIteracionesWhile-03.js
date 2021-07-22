/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	
	let ingresoClave;

	ingresoClave= prompt("Ingrese clave");

	while(ingresoClave!=="utn750"){
		
		ingresoClave= prompt("error... reingrese clave");
	}	
	alert("accediendo...");	
}//FIN DE LA FUNCIÓN
