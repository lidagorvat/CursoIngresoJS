function mostrar()
{
		//Declaro la varialbe y la convierto en numero
		var edad=document.getElementById("txtIdEdad").value;

		edad=parseInt(edad);
	
		//Secuencia lógica: Si la edad es mayor o igual a 13 Y es menor o igual a 17, muestra "Es adolescente" por alert
		if(edad>=13 && edad<=17);
		{
			alert("Es adolescente");
		}
		
}//FIN DE LA FUNCIÓN