'use strict';

const People = require('./models/people.js');
const Team = require('./models/teams.js');

const people = new People();
const team = new Team();

people.create({
  firstName: 'Sarah',
  lastName: 'Smalls',
  pets: [{ name: 'Rex' }, { name: 'Tbone' }]
});

people.create({
  firstName:'Emmanda',
  lastName:'Dula',
  birthday: '05/30/2018',
  likes: 'dog',
  team: 'Green Buffalo'
});

