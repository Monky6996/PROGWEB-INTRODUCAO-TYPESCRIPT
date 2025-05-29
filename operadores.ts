//=== OPERADORES ===\\\
let a: number = 10;
let b: number = 5;

//ARITMÈTICOS\\
console.log('Soma:', a + b)
console.log('Subtração:', a - b)
console.log('Multiplicação:', a * b)
console.log('Divisão', a / b)
console.log('Resto', a % b)

//RELACIONAIS\\
console.log('Igual:', a == b)
console.log('Diferente:', a != b)
console.log('Maior que', a > b)
console.log('Menor que', a < b)
console.log('Maior Igual', a >= b)
console.log('Menor Igual', a <= b)

//IDENTIDADE ESTRITA\\
console.log('Idêntico:', a === b)
console.log('Não Idêntico:', a!== b)

//LÒGICOS\\
let x: boolean = true;
let y: boolean = false;

console.log('AND:', x && y)
console.log('OR:', x || y)
console.log('NOT:', !x )

//OPERADOR CONDICIONAL (TERNÁRIO)\\
let idade: number = 17
let acesso = idade >= 18 ? 'Pode beijar na boca' : 'Não pode'; //CONDIÇÃO, VALOR SE TRUE : VALOR SE FALSE\\