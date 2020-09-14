import React, { useState } from 'react'
import Child from './Child';

const data = [
  {
    name: "Avi",
    age: '23',
    city: "TLV"
  },
  {
    name: "Dana",
    age: '42',
    city: "Haifa"
  }
]

const Parent = () => {
  const [persons, setPersons] = useState(data);

  const addPerson = person => {
    data.push(person);
    setPersons([...data])
  }
  return (
    <div>
      <h1>Parent Data</h1>
      <ul>
        {persons.map((elem, index) => {
          return (
            <li key={index}>{elem.name} is {elem.age} years old, lives in {elem.city} and He is {elem.age > 18 ? '' : 'an Adult'}</li>)
        })}
      </ul>
      <Child addPerson={addPerson} />
    </div>
  )
}

export default Parent