// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

const n1 = 10
const n2 = 10
 
if (n1 < n2) {
    console.log(`${n1} é menor`)
} else if(n1 > n2) {
    console.log (`${n2} é menor`)
}else if (n1 === n2) {
    console.log ('os números são iguais')
}