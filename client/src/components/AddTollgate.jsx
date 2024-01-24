import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddTollgate = () => {
    const [expressway, setExpressway] = useState('')
    const [entrypoint, setEntrypoint] = useState('')
    const [exitpoint, setExitpoint] = useState('')
    const [classnumber, setClassNumber] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
      axios.post('http://localhost:3001/tollgate/add', {expressway, entrypoint, exitpoint, classnumber, vehicle, price })
      .then(res => {
           if(res.data.added){
            navigate('/tollgates')
           }
           else {
            console.log(res)
           }
      })
      .catch(err => console.log(err))
    }
  
    return(
        <div className="user-form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2>Add Tollgate</h2>
         <div className="form-group"> 
         <label htmlFor="expressway">EXPRESSWAY:</label>
         <input type="text" id="expressway" name="expressway" 
         onChange={(e) => setExpressway(e.target.value)}/>
         </div>
         <div className="form-group"> 
         <label htmlFor="entrypoint">ENTRY POINT:</label>
         <input type="text" id="entrypoint" name="entrypoint"
         onChange={(e) => setEntrypoint(e.target.value)}/>
         </div> 
         <div className="form-group"> 
         <label htmlFor="exitpoint">EXIT POINT:</label>
         <input type="text" id="exitpoint" name="exitpoint" 
         onChange={(e) => setExitpoint(e.target.value)}/>
         </div>
         <div className="form-group"> 
         <label htmlFor="classnumber">CLASS:</label>
         <input type="text" id="classnumber" name="classnumber" 
         onChange={(e) => setClassNumber(e.target.value)}/>
         </div>   
         <div className="form-group"> 
         <label htmlFor="vehicle">VEHICLE:</label>
         <input type="text" id="vehicle" name="vehicle" 
         onChange={(e) => setVehicle(e.target.value)}/>
         </div>   
         <div className="form-group"> 
         <label htmlFor="price">PRICE:</label>
         <input type="text" id="price" name="price" 
         onChange={(e) => setPrice(e.target.value)}/>
         </div>   
         <button type="submit">Add </button>
         </form>
         </div>             
    )
}
export default AddTollgate