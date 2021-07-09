/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambre;
    let perimetro;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);
 
    perimetro= ancho*2 + largo*2;

    alambre= perimetro*3;

    alert("alambre necesario: " +alambre)





}
function Circulo () 
{
	
    let alambre;
    let circunferecia;
    let radio;

    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);
    circunferecia=  2*Math.PI*radio;

    alambre= circunferecia*3;

    alert("alambre necesario: " +alambre.toFixed(2))
}
function Materiales () 
{
	let largo;
    let ancho;
    let superficie;
    let bolsaCal;
    let bolsaCem;    

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    superficie=ancho*largo;
    bolsaCal=superficie*3;
    bolsaCem=superficie*2;

    alert("Para una superficie de " + superficie + " mt2 , se necesitan " +bolsaCal+ " bolsas de cal y "+bolsaCem+ " bolsas de cemento")
    

}