'use strict';

const validate = require("jsonschema").validate;
const fetch = require('node-fetch');

class Model {
  constructor(schema, url)  {
    this.schema = schema;
    this.url = 'http://localhost:3000/' + url;
  }

  async get(id) {
    let path = 'http://swapi.co/api/people/1';
    console.log('path', path);

    let response = await fetch(path, {method: 'GET'});
    let json = await response.json();

    if(response.ok) console.log('Data:', json);
    else console.log(response.statusText);
  }

  getFromField(query) {}

  async create(record) {
    // need sanitize()
    let response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(record),
      headers: { 'Content-Type': 'application/json'}

    });

    if(response.ok){
      let json = await response.json();
      console.log('Data:', json);
    } else console.log(response.statusText);

  }

  update(_id, record) {}

  delete(_id) {}

  count(query) {}

  sanitize(record) {}
}

module.exports = Model;
