function inicio()
{
var htmlOpcionUsuario = document.getElementById("htmlOpcionUsuario");
var htmlOpcionMaquina = document.getElementById("htmlOpcionMaquina");
var htmlResultado = document.getElementById("htmlResultado");

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

//document.write(nombreUsuario + " elegiste " + matriz[opcionUsuario] + "<br />");
htmlOpcionUsuario.innerHTML = nombreUsuario + " elegiste " + matriz[opcionUsuario]; 
//document.write("Javascript elegio " + matriz[opcionMaquina] + "<br />")
htmlOpcionMaquina.innerHTML += matriz[opcionMaquina];
//-------------------------------------------------------

if (opcionUsuario == piedra )
{
	if (opcionMaquina == piedra)
	{
		htmlResultado.innerHTML = "EMPATE";
	}
	else if (opcionMaquina == lagarto || opcionMaquina == tijeras)
	{
		htmlResultado.innerHTML = "GANASTE";
	}
	else if (opcionMaquina == papel || opcionMaquina == spock)
	{
		htmlResultado.innerHTML = "PERDISTE";
	}
}
else if (opcionUsuario == papel)
{
	if(opcionMaquina == papel)
	{
		htmlResultado.innerHTML = "EMPATE";
	}
	else if (opcionMaquina == piedra || opcionMaquina == spock) 
	{
		htmlResultado.innerHTML = "GANASTE";
	}
	else if (opcionMaquina == tijeras || opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = "PERDISTE";
	}
}
else if (opcionUsuario == tijeras)
{
	if(opcionMaquina == tijeras)
	{
		htmlResultado.innerHTML = "EMPATE";
	}
	else if (opcionMaquina == papel || opcionMaquina == lagarto) 
	{
		htmlResultado.innerHTML = "GANASTE";
	}
	else if (opcionMaquina == spock || opcionMaquina == piedra)
	{
		htmlResultado.innerHTML = "PERDISTE";
	}
}
else if (opcionUsuario == lagarto)
{
	if(opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = "EMPATE";
	}
	else if (opcionMaquina == papel || opcionMaquina == spock) 
	{
		htmlResultado.innerHTML = "GANASTE";
	}
	else if (opcionMaquina == tijeras || opcionMaquina == piedra)
	{
		htmlResultado.innerHTML = "PERDISTE";
	}
}
else if (opcionUsuario == spock)
{
	if(opcionMaquina == spock)
	{
		htmlResultado.innerHTML = "EMPATE";
	}
	else if (opcionMaquina == piedra || opcionMaquina == tijeras) 
	{
		htmlResultado.innerHTML = "GANASTE";
	}
	else if (opcionMaquina == papel || opcionMaquina == lagarto)
	{
		htmlResultado.innerHTML = "PERDISTE";
	}
}
else
{
	document.write("NO ES UNA OPCION CORRECTA, INTENTALO NUEVAMENTE :)");
}
}