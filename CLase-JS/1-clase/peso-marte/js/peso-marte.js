//script para calcular tu peso en marte
var peso, pesoMarte;

peso = prompt("Cual es su peso actual");
document.write("Su peso actual es de " + peso + "km" + "<br>");
pesoMarte=parseInt((peso/9.81) * 3.711);
document.write("Tu peso en MARTE es de " + pesoMarte + "km");
