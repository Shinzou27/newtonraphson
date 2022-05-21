var x = 0.8192; // raiz da função x³+x²-(1/x)

var chutes = parseInt(prompt("digite a qte de chutes"));

//Função f(x):
function f(x) {
    return (Math.pow(x, 3) + Math.pow(x, 2) - (1/x)) // Aqui é preciso trocar para a função desejada
}


//Derivada f'(x):
function df(x) {
    return (3*(Math.pow(x, 2)) + (2*x) + (1/(Math.pow(x, 2)))) // ...E aqui para a derivada dela
}


// Método de Newton-Raphson:
for (i = 0; i < chutes; i++) {
    x1 = x - f(x)/df(x);
    x = x1;
}


console.log(x1);
// o resultado permanecerá o mesmo, não importa quantas aproximações sejam feitas.
