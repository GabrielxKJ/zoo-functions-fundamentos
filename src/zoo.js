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

function getEmployeeByName(_employeeName) {
  // seu código aqui
}

function createEmployee(_personalInfo, _associatedWith) {
  // seu código aqui
}

function isManager(_id) {
  // seu código aqui
}

function addEmployee(_id, _firstName, _lastName, _managers, _responsibleFor) {
  // seu código aqui
}

function countAnimals(_species) {
  // seu código aqui
}

function calculateEntry(_entrants) {
  // seu código aqui
}

function getAnimalMap(_options) {
  // seu código aqui
}

function getSchedule(_dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(_id) {
  // seu código aqui
}

function increasePrices(_percentage) {
  // seu código aqui
}

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
