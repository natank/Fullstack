import React, { useState } from "react";

const App = () => {
  const data = [
    {
      name: "Dana",
      age: 20,
      city: "Haifa"
    },
    {
      name: "Ron",
      age: 22,
      city: "Tel Aviv"
    },
    {
      name: "Dov",
      age: 31,
      city: "Ashdod"
    },
    {
      name: "Vered",
      age: 19,
      city: "Eilat"
    }
  ]
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [city, setCity] = useState("")
  const [persons, setPersons] = useState(data)
  const addUser = () => {
    data.push({ age, city, name })
    setPersons(data)
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => {
            return (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.city}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <form onSubmit={addUser}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">City:</label>
          <input type="text" value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  )

}

export default App