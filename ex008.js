var x = parseFloat(prompt("digite o valor inicial"));
var chutes = parseInt(prompt("digite a qte de chutes"));

//Função f(x):
function f(x) {
    return Math.cos(x) // Aqui é preciso trocar para a função desejada
}


//Derivada f'(x):
function df(x) {
    return Math.sin(x)*(-1) // ...E aqui para a derivada dela
}


// Método de Newton-Raphson:
for (i = 0; i < chutes; i++) {
    x1 = x - f(x)/df(x);
    x = x1;
}


console.log(x1.toFixed(5));
//Sim, dependendo do valor posto, a raíz irá mudar devido a seu formato cossenoidal, em ondas, que constantemente está atingindo o valor f(x) = 0.