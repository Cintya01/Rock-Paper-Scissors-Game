var v1 = "piedra";
var v2 = "papel";
var v3 = "tijera";


function Game(player, cpu){
    if (player === cpu) {
        return resultado ="Empate";
    } else if (player === v3 && cpu === v2 || player === v2 && cpu === v1 || player === v1 && cpu == v3) {
        return resultado ="Player Wins";  
    } else {
        return resultado = "CPU Wins"
    }
}

console.log(Game());