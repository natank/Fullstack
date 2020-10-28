const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let PersonSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  city: String
})

module.exports = mongoose.model('persons', PersonSchema)