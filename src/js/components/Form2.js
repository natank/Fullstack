import React, {useState} from 'react'
import {connect} from 'react-redux'
import {ADD_USER} from '../Actions/actions'

function Form2(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [adult, setAdult] = useState(false)

  function ageChanged(event){
    const age = event.target.value;

    if(age=='' || !isNaN(age)) setAge(age)
  }

  function cityChanged(event){
    const city = event.target.value
    setCity(city)
  }


  function nameChanged(event){
    const name = event.target.value
    setName(name)
  }

  function adultChanged(event){
    setAdult(event.target.checked)
  }

  function addData(event){
    const user = {
      name, age, city, adult
    }
    props.addUser(user)
    setName('')
    setAge('')
    setCity('')
    setAdult(false)
  }


  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input onChange={nameChanged} id="name" value={name} placeholder="Enter Name"/>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input onChange={ageChanged} id="age" value={age} placeholder="Enter age"/>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <select id="city" value={city} onChange={cityChanged}>
          <option>Select City</option>
          <option value="Haifa">Haifa</option>
          <option value="Jaffa">Jaffa</option>
          <option value="TA">Tel Aviv</option>
        </select>
      </div>
      <div>
        <label htmlFor="age">Is Adult:</label>
        <input type="checkbox" onChange={adultChanged} checked={(()=>adult==true)()} id="age" name="isAdult" value={adult} />
        
      </div>
      <button onClick={addData}>Add</button>
    </div>
    )
}

function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return {
    addUser(user){
      dispatch({type: ADD_USER, payload: user})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2)