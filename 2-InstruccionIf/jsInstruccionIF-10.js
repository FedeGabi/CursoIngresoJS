function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let roundteado;

	minimo = 1
	maximo = 10
	
	numero = Math.random() * (maximo - minimo) + 1;
	roundteado = Math.round(numero)

		if(roundteado < 4){
			alert("Tu nota es " + roundteado + " Vamos la proxima se puede");			}
		else{				
			if (roundteado < 9) {			
			alert("Tu nota es: " + roundteado + " APROBASTE")
			}			
			else {
			alert ("Tu nota es: " + roundteado + " EXCELENTE")
			}

		}

}//FIN DE LA FUNCIÓN