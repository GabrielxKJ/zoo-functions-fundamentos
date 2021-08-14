const {
  species,
  employees,
  prices,
  hours,
} = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  return data.species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalSpecify = data.species.find((animals) => animals.name === animal);
  return animalSpecify.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return ({});
  }
  return data.employees
    .find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some((Person) => Person.managers.includes(id));
  // return employees.some((person, index) => person.managers[index] === id); // outra maneira de fazer
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(speciees) {
  // seu código aqui
  const allAnimals = {};
  if (!speciees) {
    species.forEach((animal) => {
      allAnimals[animal.name] = animal.residents.length;
    });
    return allAnimals;
  }
  return species.find((number) => number.name === speciees).residents.length;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const {
    Adult = 0, Senior = 0, Child = 0,
  } = entrants;
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const allSchedule = {};
  Object.entries(hours).forEach((day) => { // percorre o array de chave/valores;
    if (day[1].open === 0 && day[1].close === 0) {
      allSchedule[day[0]] = 'CLOSED';
    } else {
      allSchedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    }
  });
  if (!dayName) return allSchedule;
  const especificDay = Object.entries(allSchedule).find((specific) => specific[0] === dayName); // retorna um array
  return { [especificDay[0]]: especificDay[1] }; // acessa os valores do array dentro de um objeto.
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = employees.find((person) => person.id === id).responsibleFor[0];
  const allResidents = species.find((animal) => animal.id === firstSpecie).residents;
  const highAge = allResidents.sort((a, b) => b.age - a.age)[0];
  return Object.values(highAge);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(_percentage) {
  // seu código aqui
}
// Se o parâmetro da função recebe o valor 20, o aumento é de 20%
// Altera o objeto prices do arquivo data.js
// Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais
function getEmployeeCoverage(_idOrName) {
  // seu código aqui
}

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
