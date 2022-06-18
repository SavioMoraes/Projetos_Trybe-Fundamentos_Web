// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}
console.log(compareTrue(false, true)); // false
console.log(compareTrue(true, false)); // false
console.log(compareTrue(false, false)); // false
console.log(compareTrue(true, true)); // true

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50)); // 250
console.log(calcArea(5, 2)); // 5
console.log(calcArea(51, 1)); // 25.5

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe')); // ['go', 'Trybe']
console.log(splitSentence('vamo que vamo')); // ['vamo', 'que', 'vamo']
console.log(splitSentence('foguete')); // ['foguete']

// Desafio 4
function concatName(stringArray) {
  return stringArray[stringArray.length -1].concat(', ') + stringArray[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // Paolillo, Lucas
console.log(concatName(['foguete', 'não', 'tem', 'ré'])); // ré, foguete
console.log(concatName(['captain', 'my', 'captain'])); // captain, captain

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(14, 8)); // 50
console.log(footballPoints(1, 2)); // 5
console.log(footballPoints(0, 0)); // 0

// Desafio 6
function seekGreaterNumber(numbersArray) {
  let higherNumber = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > higherNumber) {
      higherNumber = numbersArray[index];
    }
  }
  return higherNumber;
}

function highestCount(numbersArray) {
  let largesAccountant = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === seekGreaterNumber(numbersArray)) {
      largesAccountant += 1;
    }
  }
  return largesAccountant;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); // 2
console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); // 1
console.log(highestCount([0, 0, 0])); // 3

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if ((cat2) < (cat1)) {
    return 'cat2';
  }
  if ((cat1) < (cat2)) {
    return 'cat1';
  }
}

console.log(catAndMouse(0, 3, 2)); // cat2
console.log(catAndMouse(0, 6, 12)); // cat1
console.log(catAndMouse(3, 5, 5)); // os gatos trombam e o rato foge

// Desafio 8
function conditionForFizzBuzz(value) {
  if (value % 15 === 0) {
    return 'fizzBuzz';
  } else if (value % 3 === 0) {
    return 'fizz';
  } else if (value % 5 === 0) {
    return 'buzz';
  } else {
    return 'bug!';
  }
}

function fizzBuzz(numbers) {
  let newArrayFizzBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
    newArrayFizzBuzz.push(conditionForFizzBuzz(numbers[index]));
  }
  return newArrayFizzBuzz;
}

console.log(fizzBuzz([2, 15, 7, 9, 45])); // ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']
console.log(fizzBuzz([7, 9])); // ['bug!', 'fizz']
console.log(fizzBuzz([9, 25])); // ['fizz', 'buzz']

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
}
console.log(encode('hi there')); // h3 th2r2

function decode(newString) {
  newString = newString.replace(/1/g, 'a');
  newString = newString.replace(/2/g, 'e');
  newString = newString.replace(/3/g, 'i');
  newString = newString.replace(/4/g, 'o');
  newString = newString.replace(/5/g, 'u');
  return newString;
}
console.log(decode('h3 th2r2')); // hi there

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
