import React from 'react'

const UserCard = ({user, deleteUserById, setUpdateInfo}) => {
 

    const handleEdit =()=>{
        setUpdateInfo(user)
    }
  
  return (
   <article>
    <h2>fheihef</h2>
    <h2>{`${user.first_name} ${user.last_name}`}</h2>
    <ul>
        <li> <span>Email</span>{user.email} </li>
        <li> <span>Birthday</span>{user.birthday}</li>
    </ul>
    <footer>
    <i className='bx bx-trash' onClick={()=>deleteUserById(user.id)}></i>
    <i className='bx bx-edit' onClick={handleEdit} ></i>
    </footer>
   </article>
  )
}

export default UserCard