/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

// console.log(data);
// console.log(data.prices);

// const { species } = require('./data');

// console.log(...species);

// const { species: animalNames } = require('./data');

// console.log(...animalNames);

// const { employees } = require('./data');

// console.log(employees);

// const { hours } = require('./data');

// console.log(hours);

// const { prices } = require('./data');

// console.log(prices);

const getSpeciesByIds = (...ids) => ids.map((id) => data.species.find(({ id: animalId }) => animalId === id));

// console.log(getSpeciesByIds());
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// ));

const { species: animalNames } = require('./data');

const getAnimalsOlderThan = (animal, age) => animalNames.find((animals) => animals.name === animal).residents.every((resident) => resident.age >= age);

// console.log(getAnimalsOlderThan('otters', 7)); // true
// console.log(getAnimalsOlderThan('penguins', 10)); // false

const { employees } = require('./data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

// console.log(getEmployeeByName());
// console.log(getEmployeeByName('Ola'));
// console.log(getEmployeeByName('Nelson'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// console.log(
//   {
//     id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//     firstName: 'John',
//     lastName: 'Doe',
//   },
//   {
//     managers: [
//       'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1', '9e7d4524-363c-416a-8759-8aa7e50c0992',
//     ],
//     responsibleFor: [
//       '0938aa23-f153-4937-9f88-4858b24d6bce',
//       '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//       'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//     ],
//   },
// );

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// console.log(
//   addEmployee(
//     '39800c14-4b76-454a-858d-2f8d168146a7',
//     'John',
//     'Doe',
//   ),
// );

// console.log(
//   addEmployee(
//     '4141da1c-a6ed-4cf7-90c4-99c657ba4ef3',
//     'Jane',
//     'Doe',
//     [
//       '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//       'a67a36ee-3765-4c74-8e0f-13f881f6588a',
//     ],
//     [
//       'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//       '210fcd23-aa7b-4975-91b7-0230ebb27b99',
//     ],
//   ),
// );

function countAnimals(species) {
  if (species === undefined) {
    let totalAnimals = {};
    animalNames.forEach((animal) => {
      totalAnimals[animal.name] = animal.residents.length;
    });
    return totalAnimals;
  }
  return animalNames.find((animalsBySpecie) => animalsBySpecie.name === species).residents.length;
}

// console.log(countAnimals());
// console.log(countAnimals('lions'));
// console.log(countAnimals('snakes'));

const { prices } = require('./data');

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  return Object.keys(entrants).reduce((accumulator, currentValue) => accumulator + prices[currentValue] * entrants[currentValue], 0);
}

// console.log(calculateEntry());
// console.log(calculateEntry({}));
// console.log(calculateEntry({ Adult: 2, Child: 3, Senior: 1 }));

// console.log(animalNames[0].location);

const locations = ['NE', 'NW', 'SE', 'SW'];

const auxGetLocation = () => {
  const result = {};
  locations.forEach((loc) => {
    const animals = data.species
      .filter(({ location }) => location === loc)
      .map(({ name }) => name);
    result[loc] = animals;
  });
  return result;
};

const auxCreateResult = (speciesName, residents, sexType, sorted) => {
  let result = [];
  if (sexType !== '') {
    result = { [speciesName]: residents
      .filter(({ sex }) => sex === sexType)
      .map(({ name }) => name) };
  } else {
    result = { [speciesName]: residents.map(({ name }) => name) };
  }
  if (sorted) result[speciesName].sort();
  return result;
};

const auxGetByName = (sexType, sorted) => {
  const result = {};
  locations.forEach((loc) => {
    const locationAnimals = [];
    data.species
      .filter(({ location }) => location === loc)
      .forEach(({ name: speciesName, residents }) => {
        locationAnimals.push(auxCreateResult(speciesName, residents, sexType, sorted));
      });
    result[loc] = locationAnimals;
  });
  return result;
};

function getAnimalMap(options) {
  if (options === undefined) return auxGetLocation();
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames) return auxGetByName(sex, sorted);
  return auxGetLocation();
}

// console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

const { hours } = require('./data');

function getSchedule(dayName) {
  let obj = {};
  let expediente = Object.values(hours);
  Object.keys(hours).forEach((day, index) => {
    if (dayName === undefined) obj[day] = `Open from ${expediente[index].open}am until ${expediente[index].close - 12}pm`;
    if (day === dayName) obj[day] = `Open from ${expediente[index].open}am until ${expediente[index].close - 12}pm`;
  });
  if (obj.Monday !== undefined) obj.Monday = 'CLOSED';
  return (obj);
}

// console.log(getSchedule());
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstManagedAnimal = data.species.find((zooAnimal) => zooAnimal.id === selectedEmployee);
  return Object.values(firstManagedAnimal.residents.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  }));
}

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function increasePrices(percentage) {
  const adult = ((prices.Adult / 100) * percentage) + prices.Adult + 0.001;
  const child = ((prices.Child / 100) * percentage) + prices.Child + 0.001;
  const senior = ((prices.Senior / 100) * percentage) + prices.Senior + 0.001;
  prices.Adult = Number(adult.toFixed(2));
  const pricesAdult = prices.Adult;
  prices.Child = Number(child.toFixed(2));
  const pricesChild = prices.Child;
  prices.Senior = Number(senior.toFixed(2));
  const pricesSenior = prices.Senior;

  return (`
  ${pricesAdult}
  ${pricesChild}
  ${pricesSenior}
  `);
}

// console.log(increasePrices(50));
// console.log('-----------');
// console.log(increasePrices(30));

const auxGetAllEmployeeCoverage = () => {
  const result = {};
  data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
    result[`${firstName} ${lastName}`] = responsibleFor.map((specieId) =>
      data.species.find(({ id }) => id === specieId).name);
  });
  return result;
};

const getEmployeeCoverage = (idOrName) => {
  if (idOrName === undefined) return auxGetAllEmployeeCoverage();
  const employee = data.employees
    .find(({ id, firstName, lastName }) =>
      idOrName === id || idOrName === firstName || idOrName === lastName);
  const { firstName, lastName, responsibleFor } = employee;
  const animals = responsibleFor.map((specieId) =>
    data.species.find(({ id }) => id === specieId).name);
  return { [`${firstName} ${lastName}`]: animals };
};

// console.log(getEmployeeCoverage());
// console.log(getEmployeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// console.log(getEmployeeCoverage('Stephanie'));
// console.log(getEmployeeCoverage('Azevado'));

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
