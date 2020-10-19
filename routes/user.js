var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET users listing. */
router.post('/create', async function (req, res, next) {
  var usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
  var users = usersResponse.data.map(user => user.name);
  console.log(`users: ${JSON.stringify(users)}`)
  var data = req.body;
  var fullName = `${req.body.FirstName} ${req.body.LastName}`
  var isFound = users.some(user => user == fullName)

  if (!isFound) {

    var response = await axios.post('https://jsonplaceholder.typicode.com/users',
      {
        fullName,
        userId: 2
      }
    )
    console.log(response.data)
  } else {
    console.log("FOUND USER")
  }


  res.redirect('/')
});

module.exports = router;
