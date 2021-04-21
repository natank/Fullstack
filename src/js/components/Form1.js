import React, {useState} from 'react'
import jsonPlaceholder from '../API/jsonPlaceholder'
export default function Form1() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function getData(event){
    if(id) {
     try {
       const response = await jsonPlaceholder.get(`/users/${id}`)
       const user = response.data
       if(user){
         setName(user.name)
         setEmail(user.email)
         setId(user.id)
       }
     } catch (error) {
       console.log(error)
     } 
    }
   }
 
   async function updateData(event){
     const response = await jsonPlaceholder.put(`/users/${id}`, {id, name, email})
     console.log(response.data)
   }
 
   function idChanged(event){
     let id = event.target.value;
 
     if(id=='' || !isNaN(id)) setId(id)
   }
 
   function emailChanged(event){
     let email = event.target.value
     setEmail(email)
   }
 
 
   function nameChanged(event){
     const name = event.target.value
     setName(name)
   }
 


  return (
    <div>
      <div>
        <label htmlFor="id">User ID</label>
        <input onChange={idChanged} id="id" value={id} placeholder="Enter user Id"/>
        <button onClick={getData}>Get Data</button>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input onChange={nameChanged} id="name" value={name} placeholder="Enter Name"/>
      </div>
      <div>
        <label htmlFor="Email">Email:</label>
        <input onChange={emailChanged} type="email" id="email" value={email} placeholder="Enter email"/>
      </div>
      <button onClick={updateData}>Update</button>
    </div>
    )
}
