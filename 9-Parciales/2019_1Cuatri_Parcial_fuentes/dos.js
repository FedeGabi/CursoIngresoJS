function mostrar()
{
    let nombre1;
    let nombrePareja;
    let peso1;
    let pesoPareja;
    let sumaPesos;
    let promedio;

    nombre1=prompt("Ingrese su nombre")
    nombrePareja= prompt("Ingrese el nombre de su pareja")
    peso1=prompt("Ingrese su peso en KG")
    pesoPareja= prompt("Ingrese el peso de su pareja en KG")

    peso1 = parseFloat(peso1)
    pesoPareja = parseFloat(pesoPareja)

    sumaPesos = peso1 + pesoPareja;

    promedio= (peso1 + pesoPareja) /2;

    alert("Ustedes de llaman " + nombre1 + " Y " + nombrePareja + " , pesan "+ peso1+ " KG y "+ pesoPareja+ " KG que sumado son "+ sumaPesos+ " KG "+ " y el promedio de peso es de "+ promedio+ " KG" )


}
