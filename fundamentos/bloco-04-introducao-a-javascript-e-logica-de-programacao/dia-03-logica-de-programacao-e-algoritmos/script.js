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

//Exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggerWord = array[0];
let smallWord = array[0];

for (let index in array) {
    if (biggerWord.length < array[index].length) {
        biggerWord = array[index]
    }
}

for (let index in array) {
    if (smallWord.length > array[index].length) {
        smallWord = array[index]
    }
}

console.log(biggerWord);
console.log(smallWord);