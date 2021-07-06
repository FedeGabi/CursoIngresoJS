/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let entrada;

	entrada = prompt("Escriba su nombre");

	document.getElementById("txtIdNombre").value = entrada;

	//alert("ok")
}

