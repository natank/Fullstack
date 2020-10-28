var express = require('express');
var router = express.Router();

const personsBL = require('../BL/personsBL')

/* GET home page. */
router.get('/persons', async function (req, res, next) {
  var persons = await personsBL.getAllPersons()
  res.render('persons', { persons });
});

router.get('/createPerson', function (req, res, next) {
  res.render('createPerson')
})

router.post("/createPerson", async function (req, res, next) {
  var person = req.body;
  person = await personsBL.createPerson(person)
  res.redirect("/persons")
})

router.get("/editPerson/:id", async function (req, res, next) {
  var personId = req.params.id
  var person = await personsBL.getPerson(personId)
  console.log(`got person : ${JSON.stringify(person)}`)
  res.render('createPerson', { person: person, age: person.Age })

})

router.post("/updatePerson", async function (req, res, next) {
  var person = req.body
  var person = await personsBL.updatePerson(person)
  res.redirect("/persons")
})


router.get('/:id', async function (req, res, next) {
  let perid = req.params.id
  let person = await personsBL.getPerson(perid)
})

module.exports = router;
