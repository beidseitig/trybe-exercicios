//Filter

// const persons = [
//   { name: 'Peter', age: 16 },
//   { name: 'Mark', age: 18 },
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 14 },
//   { name: 'Tony', age: 24},
// ];

// const fullAge = persons.filter((person) => person.age >= 18);
// console.log(fullAge);

//Reduce

const arr = [5, 7, 1, 8, 4];

// const sum = arr.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

let sum = 0;

for(let i in arr) {
  sum += arr[i];
}
console.log(sum);