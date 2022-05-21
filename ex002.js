var x = 0;
var chutes = 2;

//Função f(x):
function f(x) {
    return (Math.pow(x, 3) + (3*x) + 1) // Aqui é preciso trocar para a função desejada
}


//Derivada f'(x):
function df(x) {
    return ((3) + (3*(Math.pow(x, 2)))) // ...E aqui para a derivada dela
}


// Método de Newton-Raphson:
for (i = 0; i < chutes; i++) {
    x1 = x - f(x)/df(x);
    x = x1;
}
console.log(`Resposta: ${x}`);