
function mostrar()
{
    let medida;
    let perimetro;

    medida = prompt("Ingrese la medida de uno de los lados del triangulo equilatero en cm");
    medida =  parseFloat(medida);

    perimetro = medida * 3;

    alert("El perimetro del triangulo es de: " + perimetro + " cm")

}
