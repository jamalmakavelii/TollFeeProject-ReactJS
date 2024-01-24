import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {
    const [account, setAccount] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
      axios.post('http://localhost:3001/user/register', {account, username, password})
      .then(res => {
        if(res.data.registered) {
            navigate('/dashboard')
        }
        console.log(res)
      })
      .catch(err => console.log(err))
    }
  
    return(
        <div className="user-form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2>Add User</h2>
         <div className="form-group"> 
         <label htmlFor="account">Account No:</label>
         <input type="text" id="account" name="account" 
         onChange={(e) => setAccount(e.target.value)}/>
         </div>
         <div className="form-group"> 
         <label htmlFor="username">Username:</label>
         <input type="text" id="username" name="username"
         onChange={(e) => setUsername(e.target.value)}/>
         </div> 
         <div className="form-group"> 
         <label htmlFor="password">Password:</label>
         <input type="text" id="password" name="password" 
         onChange={(e) => setPassword(e.target.value)}/>
         </div>   
         <button type="submit">Register</button>
         </form>
         </div>             
    )
}
export default AddUser