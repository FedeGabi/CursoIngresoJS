/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 


                //SOLO IF ELSE.

 */function CalcularPrecio () 
{   const UNIDAD = 35;
    let cantidadLamparas;
    let marca;
    let descuento;
    let precioFinal;
    let precioCantidad;

    cantidadLamparas= document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseFloat(cantidadLamparas);
    marca = document.getElementById("Marca").value;

    if(cantidadLamparas>5){
        descuento=50;
    }
    else
    {
        if(cantidadLamparas==5){
            if(cantidadLamparas==5 && marca == "ArgentinaLuz"){
            descuento=40;        
            }
            else{
                descuento=30;
            }
        }
        if(cantidadLamparas==4){
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                descuento=25;
            }
            else{
                descuento=20;
            }
        }
        if(cantidadLamparas==3){
            if(marca =="ArgentinaLuz"){
                 descuento=15;
            }
            else{
                if (marca == "FelipeLamparas"){
                    descuento=10;
                }
                else{
                    descuento=5;
                }
            }
        } 
    }
   
    if (cantidadLamparas<3){
        descuento=0;
    }   
    precioCantidad = UNIDAD*cantidadLamparas;
    precioFinal = precioCantidad - precioCantidad * descuento/100;
    iibb=precioFinal *10/100;

    if(precioFinal>120){
        alert("Usted pago " + iibb + " de IIBB");
        document.getElementById("txtIdprecioDescuento").value = (precioFinal+iibb);
    }
    else{
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
}



                    //SWITCH MAS IF ELSE


//ABAJO HICE LO MISMO PERO CON LA INSTRUCCION SWITCH.


   /* const PRECIO_UNIDAD = 35;
    let cantidad;
    let marca;
    let descuento;
    let importeFinal;
    let iibb;
    let precioConDescuento;

    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseFloat(cantidad);
    marca = document.getElementById("Marca").value;

    switch(cantidad){
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if(marca == "ArgentinaLuz"){
                descuento=15;
            }
            else if (marca == "FelipeLamparas"){
                descuento=10;
            }
            else {
                descuento=5;
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                descuento=25;
            }
            else {
                descuento=20;
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz"){
                descuento=40;
            }
            else {
                descuento=30;
            }
            break;
    default: 
        descuento=50;
    }       
    precioConDescuento= PRECIO_UNIDAD - PRECIO_UNIDAD * descuento/100;
    importeFinal=precioConDescuento * cantidad;
    iibb= importeFinal * 0.1;

    if(importeFinal > 120){
    
    document.getElementById("txtIdprecioDescuento").value=importeFinal+iibb;
    alert("Usted pagó "+iibb+" de IIBB")
    }
    else{

        document.getElementById("txtIdprecioDescuento").value=importeFinal;
    }
                 SOLO CON SWITCH.
*/
 
    /*const PRECIO_UNIDAD = 35;
    let cantidad;
    let marca;
    let descuento;
    let importeFinal;
    let iibb;
    let precioConDescuento;

    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseFloat(cantidad);
    marca = document.getElementById("Marca").value;

    switch(cantidad){
        case 1:
        case 2:
            descuento=0;
            break;
        case 3:
            switch(marca){
                case "ArgentinaLuz":
                    descuento=15;
                    break;
                case "FelipeLamparas":
                    descuento=10;
                    break;
                default:                       //No tengo mic.
                    descuento=5;
            }
            break;
        case 4:
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25;
                    break;
                default:
                    descuento=20;
            }
            break
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                    descuento=40;
                    break;
                default:
                    descuento=30;
            }
            break;
            default:
                descuento=50;
        
        }
        precioConDescuento= PRECIO_UNIDAD - PRECIO_UNIDAD * descuento/100;
        importeFinal=precioConDescuento * cantidad;
        iibb= importeFinal * 0.1;
    
        if(importeFinal > 120){
        
        document.getElementById("txtIdprecioDescuento").value=importeFinal+iibb;
        alert("Usted pagó "+iibb+" de IIBB")
        }
        else{
    
            document.getElementById("txtIdprecioDescuento").value=importeFinal;
        }*/
        

//}