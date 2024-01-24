import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteTollgate = () => {
    const navigate = useNavigate()
    const{id} = useParams()
    useEffect (() => {
     axios.delete('http://localhost:3001/tollgate/tollgate/'+id)
     .then(res => {
      if(res.data.deleted) {
          navigate('/tollgates')
      }
     }).catch(err => console.log(err))
    }, [])
}

export default DeleteTollgate