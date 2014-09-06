var piedra = 0;
var papel = 1;
var tijeras = 2;
var lagarto = 3;
var spock = 4;
var matriz = ["PIEDRA","PAPEL","TIJERAS","LAGARTO","SPOCK"];
var opcionUsuario;
var nombreUsuario;
var opcionMaquina = random(0,4);

//---------Funacio para que JS escoja un numero entre el 0 y 4----------------------------------------------
function random(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}
//-------------------------------------------------------

nombreUsuario = prompt("Hola, BIENVENIDO cual es tu NOMBRE");

alert("Hola " + nombreUsuario + " cuando estes listo/a presiona ENTER");

opcionUsuario = prompt("Escoge una opcion:\n0 = PIEDRA\n1 = PAPEL\n2 = TIJERAS\n3 = LAGARTO\n4 = SPOCK",0);

document.write(nombreUsuario + " elegiste " + matriz[opcionUsuario] + "<br />");
document.write("Javascript elegio " + matriz[opcionMaquina] + "<br />");

//-------------------------------------------------------

if (opcionUsuario == piedra )
{
	if (opcionMaquina == piedra)
	{
		document.write("EMPATE");
	}
	else if (opcionMaquina == lagarto || opcionMaquina == tijeras)
	{
		document.write("GANASTE");
	}
	else if (opcionMaquina == papel || opcionMaquina == spock)
	{
		document.write("PERDISTE");
	}
}
else if (opcionUsuario == papel)
{
	if(opcionMaquina == papel)
	{
		document.write("EMPATE");
	}
	else if (opcionMaquina == piedra || opcionMaquina == spock) 
	{
		document.write("GANASTE");
	}
	else if (opcionMaquina == tijeras || opcionMaquina == lagarto)
	{
		document.write("PERDISTE");
	}
}
else if (opcionUsuario == tijeras)
{
	if(opcionMaquina == tijeras)
	{
		document.write("EMPATE");
	}
	else if (opcionMaquina == papel || opcionMaquina == lagarto) 
	{
		document.write("GANASTE");
	}
	else if (opcionMaquina == spock || opcionMaquina == piedra)
	{
		document.write("PERDISTE");
	}
}
else if (opcionUsuario == lagarto)
{
	if(opcionMaquina == lagarto)
	{
		document.write("EMPATE");
	}
	else if (opcionMaquina == papel || opcionMaquina == spock) 
	{
		document.write("GANASTE");
	}
	else if (opcionMaquina == tijeras || opcionMaquina == piedra)
	{
		document.write("PERDISTE");
	}
}
else if (opcionUsuario == spock)
{
	if(opcionMaquina == spock)
	{
		document.write("EMPATE");
	}
	else if (opcionMaquina == piedra || opcionMaquina == tijeras) 
	{
		document.write("GANASTE");
	}
	else if (opcionMaquina == papel || opcionMaquina == lagarto)
	{
		document.write("PERDISTE");
	}
}
else
{
	document.write("NO ES UNA OPCION CORRECTA, INTENTALO NUEVAMENTE :)");
}