/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaro las variables DEJA DE OLVIDARTE EL VALUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!
    let ancho = parseFloat(document.getElementById("txtIdLargo").value);
    let largo = parseFloat(document.getElementById("txtIdAncho").value);
    let perimetro;
    let alambre;

    //Calculo el perimetro del terreno rectangular
    perimetro = (ancho+largo)*2;

    //Calculo la cantidad de alambre necesaria (3 alambres del tamaño del perimetro)
    alambre = perimetro * 3;

    alambre = alambre.toFixed(2);

    //Muestro la cantidad de alambre por alert
    alert("La cantidad de alambre necesaria es de "+alambre +" metros");
}
function Circulo () 
{
    let radio = parseFloat(document.getElementById("txtIdRadio").value);
    let circunferencia;
    let total;

    circunferencia = 2*Math.PI*radio;
    total = circunferencia*3;
    total = total.toFixed(2);
    
    
    alert ("SE NECESITAN " + total)
}
function Materiales () 
{
	
}