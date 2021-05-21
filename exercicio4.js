//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let distancia = 1000 // km percorridos
let dias = 5 // dias pelos quais o carro foi alugado
let custoDias = 60 * dias 
let custoDistancia = 0.15 * distancia

let custoTotal = custoDias + custoDistancia
console.log(custoTotal)