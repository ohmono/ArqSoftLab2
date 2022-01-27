const interface = require('readline-sync');

var calculator = require('./app/calculator');

const firstNum = interface.question('Ingrese el primer numero: ');
const secondNum = interface.question('Ingrese el segundo numero: ');

var a = parseInt(firstNum);
var b = parseInt(secondNum);

console.log(`Add ${a} + ${b} = ${calculator.suma(a, b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.resta(a, b)}`);
console.log(`Div ${a} * ${b} = ${calculator.mult(a, b)}`);
console.log(`Mult ${a} / ${b} = ${calculator.div(a, b)}`);