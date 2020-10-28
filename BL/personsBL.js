const Person = require('../models/personModel');

exports.getAllPersons = function () {

  return new Promise((resolve, reject) => {
    Person.find({}, function (err, persons) {
      if (err) {
        reject(err)
      }
      else { resolve(persons) }
    })
  })
}

exports.getPerson = function (id) {
  return new Promise((resolve, reject) => {

    Person.findById(id, function (err, person) {
      if (err) reject(JSON.stringify(err))
      else resolve(person)
    })
  })
}

exports.createPerson = function (person) {
  return new Promise((resolve, reject) => {
    Person.create(person, function (err, person) {
      if (err) reject(err)
      else resolve(person)
    })
  })
}

exports.updatePersons = function (person)