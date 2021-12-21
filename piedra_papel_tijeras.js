var player = "piedra";
var cpu = "piedra";
var resultado;

function Game(){
    if (player === cpu) {
        return resultado ="Empate";
    } else if (player == "tijera" && cpu == "papel" || player == "papel" && cpu == "piedra" || player == "piedra" && cpu == "tijera") {
        return resultado ="Player Wins";
    } else if (cpu == "tijera" && player == "papel" || cpu == "papel" && player == "piedra" || cpu == "piedra" && player == "tijera") {
        return resultado = "CPU Wins"
    } else {
        return resultad = "Ingrese valores correctos"
    }
}

console.log(Game());