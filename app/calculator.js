'use strict';

function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    if (b == 0) {
        return 'No puede dividir por cero'
    } else {
        return a / b
    }
}

module.exports =
{
    div, resta, mult, suma
}