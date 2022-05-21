var xEsq = (-1);
var xDir = 1;

var chutes = 2;

//Função f(x):
function f(x) {
    return (Math.pow(x, 4) + x - 3) // Aqui é preciso trocar para a função desejada
}


//Derivada f'(x):
function df(x) {
    return (4*Math.pow(x, 3)) // ...E aqui para a derivada dela
}


// Método de Newton-Raphson:
for (i = 0; i < chutes; i++) {
    x1Esq = xEsq - f(xEsq)/df(xEsq);
    xEsq = x1Esq;
    x1Dir = xDir - f(xDir)/df(xDir);
    xDir = x1Dir;
}
console.log(`Resposta: ${xEsq} à esquerda e ${xDir} à direita.`);