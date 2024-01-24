import React from 'react'
import { Link } from 'react-router-dom';

const TollgateCard = ({tollgate, role}) => {
  
  const {expressway, entrypoint, exitpoint, classnumber, vehicle, price} = tollgate;
  return (
    <div className='tollgate-card'>
      <div className="tollgate-details">
          <h3>{expressway}</h3>
          <p>{entrypoint}</p>
          <p>{exitpoint}</p>
          <p>{classnumber}</p>
          <p>{vehicle}</p>
          <p>{price}</p>
       </div>
       {role === "admin" &&
       <div className='tollgate-actions'>
       <button><Link to={`/tollgate/${tollgate._id}`} className='btn-link' style={{ color: 'white' }}>Edit</Link></button>
       <button><Link to={`/delete/${tollgate._id}`} className='btn-link' style={{ color: 'white' }}>Delete</Link></button>
     </div>}
     
    </div>
  )
}

export default TollgateCard