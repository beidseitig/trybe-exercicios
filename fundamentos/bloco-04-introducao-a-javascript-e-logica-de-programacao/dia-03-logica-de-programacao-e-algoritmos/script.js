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

//Exercício 4
let biggestPrime = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
    isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestPrime = currentNumber;
    }
}

console.log(biggestPrime);

