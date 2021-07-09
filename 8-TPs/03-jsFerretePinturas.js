/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let aCentigrados;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura)
    aCentigrados= (temperatura-32)/1.8;

    alert(aCentigrados+"º Grados centigrados")
}


function CentigradosFahrenheit () 
{
	let temperatura;
    let aFahrenheit;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);
    aFahrenheit= temperatura*1.8+32;

    alert(aFahrenheit+"º Grados Fahrenheit")
}
