//Exercício 1
let fator = 10;
let result = 1;

for (let index = 2; index <= 10; index += 1) {
    result = result * index;
}

console.log('Exercício 1: ' + result);

//Exercício 2
let word = 'jayne';

let newWord = word.split('').reverse().join('');

console.log('Exercício 2: ' + newWord);