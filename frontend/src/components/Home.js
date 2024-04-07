import React, { useState, useEffect } from 'react';
import Floating from './Floating';
// import Mapbox from './Map';
import MapSec from "./MapSec"
import "./Home.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
 const [locations, setLocations] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/foodform')
      .then(response => {
        setData(response.data);
        console.log(response.data);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/location')
      .then(response => {
        setLocations(response.data);
        console.log(response.data);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
 
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  // const link=`https://www.google.com/maps/dir/${locations[1].latitude},${locations[1].longitude}/30.9010,75.8573`
  return (
    <>
      <div>
        <Floating />
      </div>
      <div className='bgdWant'>
        <div className='mapWant'>
        {/* <Mapbox /> */}
        <MapSec latitude="30.350369" longitude="76.378296"/>
        </div>
      </div>

     
      {/* <button onClick={toggleDetails} className='btn btnWant'>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button> */}

     
      {showDetails && (
        <div className='dataInfo'>
          {data.length > 4 && (
            <div key={data[2].phone}>
              <h1>Name : {data[2].name}</h1>
              <h1>Ph. no.{data[2].phone}</h1>
              <h1>Address: {data[2].address}</h1>
              <h1>Food Available: {data[2].food}</h1>
              
              <Link to={`https://www.google.com/maps/dir/${locations[1].latitude},${locations[1].longitude}/30.350369,76.378296`} target='_blank'>Click here for Directions</Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
