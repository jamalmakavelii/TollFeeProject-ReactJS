import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const EditTollgate = () => {
    const [expressway, setExpressway] = useState('')
    const [entrypoint, setEntrypoint] = useState('')
    const [exitpoint, setExitpoint] = useState('')
    const [classnumber, setClassNumber] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.put('http://localhost:3001/tollgate/tollgate/'+id)
        .then(res => {
             setExpressway(res.data.expressway)
             setEntrypoint(res.data.entrypoint)
             setExitpoint(res.data.exitpoint)
             setClassNumber(res.data.classnumber)
             setVehicle(res.data.vehicle)
             setPrice(res.data.price)  
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
      axios.put('http://localhost:3001/tollgate/tollgate/'+id, {expressway, entrypoint, exitpoint, classnumber, vehicle, price })
      .then(res => {
           if(res.data.updated) {
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
                <h2>Edit Tollgate</h2>
         <div className="form-group"> 
         <label htmlFor="expressway">EXPRESSWAY:</label>
         <input type="text" id="expressway" name="expressway" value={expressway}
         onChange={(e) => setExpressway(e.target.value)}/>
         </div>
         <div className="form-group"> 
         <label htmlFor="entrypoint">ENTRY POINT:</label>
         <input type="text" id="entrypoint" name="entrypoint" value={entrypoint}
         onChange={(e) => setEntrypoint(e.target.value)}/>
         </div> 
         <div className="form-group"> 
         <label htmlFor="exitpoint">EXIT POINT:</label>
         <input type="text" id="exitpoint" name="exitpoint" value={exitpoint}
         onChange={(e) => setExitpoint(e.target.value)}/>
         </div>
         <div className="form-group"> 
         <label htmlFor="classnumber">CLASS:</label>
         <input type="text" id="classnumber" name="classnumber" value={classnumber}
         onChange={(e) => setClassNumber(e.target.value)}/>
         </div>   
         <div className="form-group"> 
         <label htmlFor="vehicle">VEHICLE:</label>
         <input type="text" id="vehicle" name="vehicle" value={vehicle}
         onChange={(e) => setVehicle(e.target.value)}/>
         </div>   
         <div className="form-group"> 
         <label htmlFor="price">PRICE:</label>
         <input type="text" id="price" name="price" value={price}
         onChange={(e) => setPrice(e.target.value)}/>
         </div>   
         <button type="submit">Update </button>
         </form>
         </div>             
    )
}
export default EditTollgate