//Exercício 1
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com`}
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(employeeGenerator));

//Exercício 2
const myNumber = Math.floor(Math.random() * 5) + 1;
const prizeNumber = Math.floor(Math.random() * 5) + 1;

const check = () => myNumber === prizeNumber;

const result = (number, action) => {
  if (action() === true) {
    return "Parabéns você ganhou";
  } else {
    return "Tente novamente"
  }
};

console.log(result(myNumber, check));

//Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const pontuation = (rightAnswer, studentAnswer, action) => {
  let score = 0;
  for (let i = 0; i < rightAnswer.length; i += 1) {
    const actionReturn = action(rightAnswer[i], studentAnswer[i]);
      score += actionReturn;
  }
  return `Resultado Final: ${score} pontos`
}

console.log(pontuation(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
// let scoreCount = (rightAnswer, studentAnswer) => {
//   let score = 0;
//   for(let i= 0; i < rightAnswer.length; i += 1) {
//     if (rightAnswer[i] === studentAnswer[i]) {
//       score += 1;
//     } else if (rightAnswer[i] !== studentAnswer[i] && studentAnswer[i] !== "N.A") {
//       score -= 0.5;
//     }
//   }
//   return score;
// };

// console.log(scoreCount());

// // const pontuation = (stAnswer, rgAnswer, action);

// // console.log(pontuation(STUDENT_ANSWERS, RIGHT_ANSWERS, scoreCount));