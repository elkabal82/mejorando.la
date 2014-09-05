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

