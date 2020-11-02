
const Person = require('../models/personsModel')

exports.getAll = function () {
  return new Promise((resolve, reject) => {
    Person.find({}, function (err, persons) {
      if (err) {
        reject(err)
      }
      else { resolve(persons) }
    })
  })
}

exports.getItemById = function (id) {
  return new Promise((resolve, reject) => {

    Person.findById(id, function (err, person) {
      if (err) reject(JSON.stringify(err))
      else resolve(person)
    })
  })
}

exports.addPerson = function (obj) {
  return new Promise((resolve, reject) => {
    Person.create(obj, function (err, person) {
      if (err) reject(err)
      else resolve(person)
    })
  })
}

exports.updatePerson = async function (id, obj) {
  var doc = await Person.findById(id)
  doc = { ...doc, ...obj }
  doc.save()
}

exports.deletePerson = function (id) {
  return new Promise((resolve, reject) => {
    Person.findByIdAndDelete(id, function (err) {
      if (err) reject(err)
      else console.log("successfull deletion")

    })
  })
}

