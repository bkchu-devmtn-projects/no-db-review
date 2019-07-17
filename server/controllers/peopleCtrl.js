const axios = require('axios');

let people = [];
let id = 0;

axios.get('https://www.swapi.co/api/people').then(response => {
  const arr = response.data.results;
  const objectsWithIds = arr.map(obj => {
    obj.id = id;
    id++;
    return obj;
  });
  people = objectsWithIds;
});

const getPeople = (req, res, next) => {
  res.status(200).send(people);
};

const getFilteredPeople = (req, res, next) => {
  const { filter } = req.params;

  let filteredPeople = people.filter(person => person.name.includes(filter));

  res.status(200).send(filteredPeople);
};

const deletePerson = (req, res, next) => {
  const { id } = req.params; // anything from params is a string 
  let indexOfPerson = people.findIndex(person => person.id == id);
  people.splice(indexOfPerson, 1);
  res.status(200).send(people);
};

const createPerson = (req, res, next) => {
  const { name } = req.body;
  let newPerson = {
    name,
    id
  };
  people.push(newPerson);
  res.status(200).send(people);
};

const updatePerson = (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;

  let indexOfPerson = people.findIndex(person => person.id == id);
  people[indexOfPerson].name = name;

  res.status(200).send(people);
};

const existingArrayOfStuff = [1, 2, 3, 4];
const putSomethingInArray = (req, res, next) => {
  const { something } = req.body;
  
  existingArrayOfStuff.push(something);

  res.status(200).send(existingArrayOfStuff);
}

module.exports = {
  getPeople,
  getFilteredPeople,
  deletePerson,
  createPerson,
  updatePerson,
  putSomethingInArray
};
