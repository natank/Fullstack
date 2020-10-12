let axios = require('axios');
var fs = require('fs')
// axios.get("https://jsonplaceholder.typicode.com/posts/5")
//   .then(resp => console.log(resp.data))

// var user = { name: 'Avi', email: 'a@a.com' }
// axios.post("https://jsonplaceholder.typicode.com/users", user)
//   .then(resp => console.log(resp.data))



const jsonplaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});



async function getFullName(username) {
  var users = await getUsers()
  var user = users.find(user => user.username == username)

  if (user && user.name[0] == 'E') {
    var userId = user.id;

    var todos = await getTodos()

    var userTodos = todos.filter(todo => todo.userId == userId)
    console.log(userTodos)

    let data = JSON.stringify(userTodos.map(todo => `${todo.title}`));
    writeData(user.name, data)
    // fs.writeFileSync(`${user.name} todos.json`, data);
  }

}

async function getUsers() {
  var response = await jsonplaceholder.get('/users')
  return response.data
}

async function getTodos() {

  var response = await jsonplaceholder.get('/todos')
  return response.data;
}

function writeData(name, data) {
  fs.writeFileSync(`${name} todos.json`, data);
}

getFullName("Antonette")