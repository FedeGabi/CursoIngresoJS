
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  var flagSeguir;
  var producto;
  var precio;
  var unidades;
  var acumuladorCal;
  var acumuladorCemento;
  var acumuladorArena;
  var flagCaro;
  var tipoMasCaro;
  var precioMasCaro;
  var cantidadUnidadesTotal;
  var cantidadPrecio;

  cantidadUnidadesTotal=0;
  cantidadPrecio=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;
  flagSeguir=true;
  flagCaro=true;

  while(flagSeguir==true)
  {
    producto=prompt("ingrese producto")
    while(producto!="arena" && producto!="cemento" && producto!="cal")
    {
      producto=prompt("ingrese producto correcto")
    }
    unidades=prompt("ingrese cantidad de unidades")
    unidades=parseInt(unidades)
    while(unidades<1)
    {
      unidades=prompt("ingrese cantidad valida mayor a cero")
      unidades=parseInt(unidades)
    }
    precio=prompt("ingrese precio")
    precio=parseInt(precio)
    while(precio<1)
    {
      precio=prompt("ingrese cantidad valida mayor a cero")
      precio=parseInt(precio)
    }
    switch(producto)
    {
      case "arena":
        acumuladorArena=acumuladorArena+unidades;
        break;
      case "cal":
        acumuladorCal=acumuladorCal+unidades;
        break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+unidades;
        break;
    }
    while(flagCaro==true)
    {
      tipoMasCaro=producto;
      precioMasCaro=precio;
      flagCaro=false;
    }
    if(precioMasCaro<precio)
    {
      precioMasCaro=precio;
      tipoMasCaro=producto;
    }
    cantidadPrecio=cantidadPrecio+precio;
    cantidadUnidadesTotal=acumuladorCal+acumuladorArena+acumuladorCemento;;
    flagSeguir=confirm("desea continuar?")
  }
  document.write("importe bruto "+ cantidadPrecio+"<br>")
  if(cantidadUnidadesTotal>30)
  {
    document.write("descuento del 25% por compra mayores a 30: "+(cantidadPrecio-cantidadPrecio*25/100)+"<br>")
  }
  else
  {
    if(cantidadUnidadesTotal>10)
    {
      document.write("descuento del 15% por compra mayores a 10: "+(cantidadPrecio-cantidadPrecio*15/100)+"<br>")
    }
    else
    {
      document.write("no tiene descuento")
    }
  }
  if(acumuladorCemento>acumuladorCal && acumuladorCemento>acumuladorArena)
  {
    document.write("Cemento es el tipo de producto con mayor cantidad de bolsas compradas: "+acumuladorCemento+"<br>")
  }
  else
  {
    if(acumuladorCal>acumuladorArena)
    {
      document.write("Cal es el tipo de producto con mayor cantidad de bolsas compradas: "+acumuladorCal+"<br>")
    }
    else
    {
      document.write("Arena es el tipo de producto con mayor cantidad de bolsas compradas: "+acumuladorArena+"<br>")
    }
  }
  document.write("el tipo mas caro es: "+tipoMasCaro+ " con un precio de: "+precioMasCaro+"<br>")

}
