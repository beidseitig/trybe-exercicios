//Exercício 1
let fator = 10;
let resultado = 1;

for (let index = 2; index <= 10; index += 1) {
    resultado = resultado * index;
}

console.log('Exercício 1: ' + resultado);

//Exercício 2
let word = 'tryber';
let inverseWord = word.split('').reverse().join('');

console.log('Exercício 2: ' + inverseWord);