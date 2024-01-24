import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TollgateCard from './TollgateCard';
import TollFeeApp from './TollFeeApp'; // Import TollFeeApp
import './styles.css';
import '../css/Tollgate.css';

const Tollgates = ({ role }) => {
  const [tollgates, setTollgates] = useState([]);

  useEffect(() => {
    fetchTollgates();
  }, []);

  // Function to fetch tollgates
  const fetchTollgates = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tollgate/tollgates');
      setTollgates(response.data);
    } catch (err) {
      console.error('Error fetching tollgates:', err);
    }
  };

  // Function to update toll data
  const updateTollData = async (newTollgate) => {
    try {
      // Add the new tollgate to the server
      await axios.post('http://localhost:3001/tollgate/tollgates', newTollgate);
      // Fetch the updated tollgates
      fetchTollgates();
    } catch (err) {
      console.error('Error updating toll data:', err);
    }
  };

  return (
    <div className='tollgate-container'>
      <TollFeeApp updateTollData={updateTollData} />

      <div className='tollgate-list'>
        {tollgates.map((tollgate) => (
          <TollgateCard key={tollgate._id} tollgate={tollgate} role={role} />
        ))}
      </div>
    </div>
  );
};

export default Tollgates;
