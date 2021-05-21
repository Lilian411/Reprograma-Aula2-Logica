//  Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorDoJantar = 500
let taxa = valorDoJantar * (10/100)
let valorTotal = valorDoJantar + taxa 

console.log (`Valor da tava: R$ ${taxa} / valor da conta: R$ ${valorTotal}`)
