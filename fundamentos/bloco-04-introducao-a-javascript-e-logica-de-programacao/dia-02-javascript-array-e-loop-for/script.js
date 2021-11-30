let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let biggerNumber = numbers[0];
let smallerNumber = numbers[0];
let array = [];
let neoNumbers = [];

// Exercício 1
for (let number of numbers) {
    console.log('Exercício 1 = ' + number);
}



// Exercício 2
for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}

console.log('Exercício 2 = ' + soma);



// Exercício 3

let media = soma/numbers.length;

console.log('Exercício 3 = ' + media);



// Exercício 4
if (media > 20) {
    console.log('Exercício 4 = ' + 'Valor maior que 20');
} else {
    console.log('Exercício 4 = ' + 'Valor menor que 20');
}



// Exercício 5
for (index = 0; index < numbers.length; index += 1) {
    if (biggerNumber < numbers[index]) {
        biggerNumber = numbers[index]
    }
}

console.log('Exercício 5 = ' + biggerNumber);



// Exercício 6
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        console.log('Exercício 6 = ' + numbers[index])
    }
}



// Exercício 7
for (index = 0; index < numbers.length; index += 1) {
    if (smallerNumber > numbers[index]) {
        smallerNumber = numbers[index]
    }
}

console.log('Exercício 7 = ' + smallerNumber);



// Exercício 8
for (index = 1; index < 26; index += 1) {
    array.push(index);
}

console.log('Exercício 8 = ' + array)



// Exercício 9
for (index = 0; index < numbers.length; index += 1) {
    console.log('Exercício 9 = ' + numbers[index]/2);
}



// Bonus 1

  // Algoritmo de ordenação Bubble Sort

//   for (let index = 1; index < numbers.length; index += 1) {
//       for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (numbers[index] < numbers[secondIndex]) {
//           let position = numbers[index];
//           numbers[index] = numbers[secondIndex];
//           numbers[secondIndex] = position;
//         }
//       }
//     }

numbers.sort(function(a, b) {
return a - b;
});


console.log('Bonus 1 = ' + numbers);



// Bonus 2

  // Algoritmo de ordenação Bubble Sort

//   for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

numbers.sort(function(a, b) {
    return b - a;
  });



console.log('Bonus 2 = ' + numbers);



// Bonus 3
// for (let index of numbers) {
//     if (index === numbers.length - 1) {
//         neoNumbers.push(numbers[index] * 2);
//     } else {
//         neoNumbers.push(numbers[index] * numbers[index + 1]);
//     }
// }



for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length ) {
        neoNumbers.push(numbers[index] * numbers[index + 1])
    } else {
        neoNumbers.push(numbers[index] * 2)
    }
}

// console.log(numbers);
console.log(neoNumbers);