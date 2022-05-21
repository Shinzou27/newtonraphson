var x = 2;
var chutes = 10; // Usei um número grande para aumentar a precisão.
sinal = -1;

//Função f(x):
function f(x) {
    return (Math.pow(x, 4) - 2) // Aqui é preciso trocar para a função desejada
}


//Derivada f'(x):
function df(x) {
    return (4*Math.pow(x, 3)) // ...E aqui para a derivada dela
}


// Método de Newton-Raphson:
for (i = 0; i < chutes; i++) {
    x1 = x - f(x)/df(x);
    x = x1;
}
for (i=0;i<2;i++) {
            sinal *= (-1);
		console.log(`Resposta da questão ${(5.5)-(sinal/2)}: ` + (sinal*x).toFixed(6));
    	}