function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let roundteado;

	minimo = 1
	maximo = 10
	
	numero = Math.random() * (maximo - minimo) + 1;
	roundteado = Math.round(numero);

	alert(roundteado);

}//FIN DE LA FUNCIÓN