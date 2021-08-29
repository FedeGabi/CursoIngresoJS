/*Bienvenidos.

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.


a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/


function mostrar()
{  
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var flagSeguir;
	var maximoTemperatura;
	var maximoTemperaturaNombre;
	var flagMaxTemp;
	var contadorViudos;
	var contadorSolteros;
	var contadorMayoresViudos;


	flagMaxTemp=true;
	flagSeguir=true;
	 while(flagSeguir==true)
	 {
		nombre=prompt("ingrese nombre");
		edad=prompt("ingrese edad")
		edad=parseInt(edad)
		while(edad<1 || edad>120)
		{
			edad=prompt("ingrese edad correcta entre 1 y 120 (no se conocio hombre tan viejo)")
			edad=parseInt(edad)
		}
		sexo=prompt("ingrese sexo")
		while(sexo!="m" && sexo!="m")
		{
			sexo=prompt("ingrese sexo VALIDO (f o m)")
		}
		estadoCivil=prompt("ingrese su estado civil")
		while(estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("ingrese su estado civil VALIDO")
		}
		temperatura=prompt("ingrese temperatura")
		temperatura=parseFloat(temperatura)
	 }
	 while(flagMaxTemp==true)
	 {
		 maximoTemperatura=temperatura;
		 maximoTemperaturaNombre=nombre;
		 flagMaxTemp=false;
	 }
	 if(temperatura>maximoTemperatura)
	 {
		 maximoTemperatura=temperatura;
		 maximoTemperaturaNombre=nombre;
	 }
	 if(edad>18 && estadoCivil=="viudo")
	 {
		 contadorMayoresViudos++;
	 }
	 if(sexo=="m" && (estadoCivil=="soltero" || estadoCivil=="viudo"))
	 {
		 contadorHombresSolterosViudos++;
	 }
	 if(edad>60 && temperatura>38)
	 {
		 contadorTerceraEdad++;
	 }
	

	 }

	
}
