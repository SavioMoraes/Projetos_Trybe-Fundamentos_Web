// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length <= 0) {
    return 'Vazio!';
  }
  let newArrayTech = [];
  arrayTech = arrayTech.sort();
  for (let tech = 0; tech < arrayTech.length; tech += 1) {
    newArrayTech.push({
      tech: arrayTech[tech],
      name,
    });
  }
  return newArrayTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Sávio'));
// saída:
/*
[
  {
    tech: "CSS",
    name: "Sávio"
  },
  {
    tech: "HTML",
    name: "Sávio"
  },
  {
    tech: "JavaScript",
    name: "Sávio"
  },
  {
    tech: "Jest",
    name: "Sávio"
  },
  {
    tech: "React",
    name: "Sávio"
  }
]
*/
console.log(techList([], 'Sávio')); // Vazio!

// Desafio 11
function checkRepeat(value, phone) {
  let resp = 0;
  for (let indexNumber = 0; indexNumber < phone.length; indexNumber += 1) {
    if (value === phone[indexNumber]) {
      resp += 1;
    }
    if (resp >= 3) {
      return true;
    }
  }
  return false;
}
function checkOtherThanEleven(value) {
  return value < 0 || value > 9;
}
function testPhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let testIndex = 0; testIndex < phone.length; testIndex += 1) {
    if (checkOtherThanEleven(phone[testIndex]) || checkRepeat(phone[testIndex], phone)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function generatePhoneNumber(phone) {
  if (testPhoneNumber(phone)) {
    return testPhoneNumber(phone);
  }
  let generateNumber = '(';
  for (let number = 0; number < phone.length; number += 1) {
    if (generateNumber.length === 3) {
      generateNumber += ') ';
    } else if (generateNumber.length === 10) {
      generateNumber += '-';
    }
    generateNumber += phone[number];
  }
  return generateNumber;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // (12) 34567-8901
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3])); // Array com tamanho incorreto.
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Array com tamanho incorreto.
console.log(generatePhoneNumber([1, 32, 3, 4, 5, 6, 7, 8, 19, 10, -1])); // não é possível gerar um número de telefone com esses valores
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1])); // não é possível gerar um número de telefone com esses valores

// Desafio 12
function testSmaller(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB))) {
    return true;
  }
  return false;
}
function testBigger(lineA, lineB, lineC) {
  let testLineA = Math.abs(lineB - lineC);
  let testLineB = Math.abs(lineA - lineC);
  let testlineC = Math.abs(lineA - lineB);
  if ((lineA > testLineA) && (lineB > testLineB) && (lineC > testlineC)) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  if ((testSmaller(lineA, lineB, lineC)) && (testBigger(lineA, lineB, lineC))) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 2, 2)); // false
console.log(triangleCheck(3, 2, 1)); // false
console.log(triangleCheck(10, 14, 8)); // true


// Desafio 13
function hydrate(drinks) {
  let glassesOfWater = 0;
  let cupNumbers = drinks.match(/\d+/g).map(Number);
  for (let index = 0; index < cupNumbers.length; index += 1) {
    glassesOfWater += cupNumbers[index];
  }
  if (glassesOfWater === 1) {
    glassesOfWater += ' copo de água';
  }
  if (glassesOfWater > 1) {
    glassesOfWater += ' copos de água';
  }
  return glassesOfWater;
}

console.log(hydrate('1 cerveja')); // '1 copo de água'
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); // '7 copos de água'

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
