const dal = require('../dal/personsDAL')
const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let PersonSchema = new Schema({
  name: String,
  age: Number,
})

module.exports = mongoose.model('persons', PersonSchema)


