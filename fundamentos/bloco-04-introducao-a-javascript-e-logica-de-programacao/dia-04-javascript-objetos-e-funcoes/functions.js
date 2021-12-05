


function verificaPalindromo(string) {
    if (string === string.split('').reverse().join('') ) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));



function maiorValor(number) {
    let indexMaior = 0;
    for (let index in number) {
        if (number[indexMaior] < number[index]) {
            indexMaior = index;
        } 
    }
    return indexMaior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));



function menorValor(number) {
    let indexMenor = 0;
    for (let index in number) {
        if (number[indexMenor] > number[index]) {
            indexMenor = index;
        } 
    }
    return indexMenor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));


function maiorNome(nome) {
    let indexMaior = 0;
    for (let index in nome) {
        if (nome[indexMaior].length < nome[index].length) {
            indexMaior = index;
        } 
    }
    return nome[indexMaior];
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



function numeroMaisRepetido(array) {
    let contNumero= 0;
    let contRepetido = 0;
    let indexDoNumeroRepetido = 0;
    for (let index of array) {
        let numero = array[index];
        for (let index2 of array) {
            if (numero === array[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexDoNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return array[indexDoNumeroRepetido];
}
console.log(numeroMaisRepetido([2, 3, 2, 5, 8, 2, 3]));



function somatorio(n) {
    let soma = 0;
    for (index = 0; index <= n; index += 1) {
        soma = soma + index;
    }
    return soma;
}

console.log(somatorio(5));



function verificaFimDaPalavra (word, ending) {
    word = word.split('');
    ending = ending.split('');
    resultado = true;
    for (let index = 0; index < ending.length; index += 1) {
        if (word[word.length - ending.length + index] != ending[index]) {
            resultado = false;
        }
    }
    return resultado;
}

console.log(verificaFimDaPalavra('trybe', 'be'));
console.log(verificaFimDaPalavra('joaofernando', 'fernan'));