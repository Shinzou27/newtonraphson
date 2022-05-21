var x = parseFloat(prompt("digite um valor"));
var chutes = parseInt(prompt("digite a qte de chutes"));

//Função f(x):
function f(x) {
    return x-1-(0,5*Math.sin(x)) // Aqui é preciso trocar para a função desejada
}


//Derivada f'(x):
function df(x) {
    return 1 - (0,5*Math.sin(x)) // ...E aqui para a derivada dela
}


// Método de Newton-Raphson:
for (i = 0; i < chutes; i++) {
    x1 = x - f(x)/df(x);
    x = x1;
}


console.log(x1);