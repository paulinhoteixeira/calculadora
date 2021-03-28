let primeiroValor = parseFloat(prompt("Digite o primeiro valor:"))
let operador = prompt("Digite a operação desejada")
let segundoValor = parseFloat(prompt("Digite segundo valor:"))


let resultado = 0

switch (operador){
    case "+":
        resultado = primeiroValor + segundoValor
        break;
    case "-":
        resultado = primeiroValor - segundoValor
        break;
    case "*":
        resultado = primeiroValor * segundoValor
        break;
    case "/":
        resultado = primeiroValor / segundoValor
        break;
    default:
        alert("Operação inválida!")
        break;

}

 

document.write(`<h2>${primeiroValor} ${operador} ${segundoValor} = ${resultado}</h2>`)

