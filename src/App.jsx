import axios from 'axios';
import { useEffect, useState } from 'react'

import './App.css'
import FormUsers from './components/FormUsers';
import UserCard from './components/UserCard';



function App() {

  const baseUrl ='http://144.126.218.162:9000'
  const [users, setUsers] = useState()

  // usestate "updateInfo" is being used to send info as a prop from UserCard to FormUser component
  const [updateInfo, setUpdateInfo] = useState()
   console.log(updateInfo)

  // function to get all users from api
  const getAllUsers = ()=>{
    const URL = `${baseUrl}/users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect (()=> {
getAllUsers()
  }, [])

  console.log(users)

const createNewUser = data =>{
  const URL = `${baseUrl}/users/`
 
  axios.post(URL, data)
  .then(res => {
    console.log(res.data)
    getAllUsers()
  })
  .catch(err => console.log(err))
}
const deleteUserById = id=>{
  const URL = `${baseUrl}/users/${id}/`
  axios.delete(URL)
  .then(res =>{console.log(res.data)
  getAllUsers()})
  .catch(err =>console.log(err))
}
  return (
    <div className="App">
     <FormUsers
     createNewUser ={createNewUser}
     />
     {
      users?.map(user =>(
        <UserCard
         key={user.id}
        user ={user} 
        deleteUserById ={deleteUserById}
        setUpdateInfo={setUpdateInfo}
        />
      ))
     }
    </div>
  )
}

export default App
