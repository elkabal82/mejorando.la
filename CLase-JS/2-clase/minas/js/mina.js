//script para el juego de campo minado, tenemos que escojer campo 
//libres de minas
//----VAR-------------------------------------

var nomJugador;
var campo = [[1, 0, 0],    //1=bonba 0=libre
			 [0, 1, 0],    
			 [1, 1, 1]];
var posicion;
var x, y;
var textos = ["cesped", "bomba"]; 
//textos solo es una varible para remplasar el valor de 0 o 1 con la ayuda de la variable posicion
  
//----Funciones------------------
function explosion()
{
	document.write("Elejiste un area minada o fuera del rango");
	alert("BOOOOM  ");
}

function ganaste()
{
	confirm("GANASTE, " + nomJugador +" GANASTE");
}


//-----------------------
confirm("Hola bienvenido,");

nomJugador = prompt("Hola cual es tu nombre");
document.write(nomJugador + ", Estas en un campo minado." + "<br />");

x = prompt(nomJugador + " Ingresa un valor entre el 0 y 2 para X");
y = prompt(nomJugador + " Ingresa un valor entre el 0 y 2 para Y");


if (x <= 2 && y <=2)
//si el usuario eligio una posicion correcta
{
	posicion = campo[x][y]; 
	//la variable posicion almacena el resulado de campo, osea que arroja un 0 o un 1
	

	if (posicion == 1)
	{
		explosion();
	}
	else
	{
		ganaste()
	}
}
else
// si no escogio una posicion correcta
{
	explosion();
}