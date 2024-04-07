/*
import React, { useState, useEffect } from 'react';
import Map, { NavigationControl } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker } from "react-map-gl";
import "./Map.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

function Maps(){
    const [lng , setLng] = useState(76.378296)
    const [lat , setLat] = useState(30.350369)
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState([]);
    const [locations, setLocations] = useState([]);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
      };

    const show =()=>{
        console.log("done")
    }
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
    return(
       <>
       <div>
           <Map mapboxAccessToken="pk.eyJ1IjoicHVzaHAwMTE5IiwiYSI6ImNsdW9nb3B1ZDFxcTgya2xpaHYwczVyd2YifQ.ZGKUgHIqEWyvaGuXoG2zkw"
                 style={{
                    width: "80vw",
                    height: "62vh",
                    borderRadius: "15px",
                    border: "2px solid #31525B",
                }}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom: 15
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
           >

                <div className="marker" >
                    <div onClick={toggleDetails}>

               <Marker latitude={lat} longitude={lng} className="marker" onClick={toggleDetails}>
               </Marker>
                    </div>
               
                </div>
               <div style={{ position: 'absolute', right: 0 }}>
                   <NavigationControl />
               </div>
           </Map>
           {showDetails && (
        <div className='dataInfo'>
          {data.length > 2 && (
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
       </div>
       </>
    )
}

export default Maps;
*/

import React, { useState, useEffect } from 'react';
import Map, { NavigationControl, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Map.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Maps(){
    const [lng , setLng] = useState(76.378296)
    const [lat , setLat] = useState(30.350369)
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState([]);
    const [locations, setLocations] = useState([]);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

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
    return(
       <>
       <div>
           <Map mapboxAccessToken="pk.eyJ1IjoicHVzaHAwMTE5IiwiYSI6ImNsdW9nb3B1ZDFxcTgya2xpaHYwczVyd2YifQ.ZGKUgHIqEWyvaGuXoG2zkw"
                 style={{
                    width: "80vw",
                    height: "62vh",
                    borderRadius: "15px",
                    border: "2px solid #31525B",
                }}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom: 15
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
           >
                <Marker latitude={lat} longitude={lng} className="marker" onClick={toggleDetails}>
                </Marker>
               <div style={{ position: 'absolute', right: 0 }}>
                   <NavigationControl />
               </div>
           </Map>
           {showDetails && (
        <div className='dataInfo'>
          <button onClick={toggleDetails} className='btn btnClose'>X</button>
          {data.length > 2 && (
            <div key={data[0].phone}>
              <h1>Name : {data[0].name}</h1>
              <h1>Ph. no.{data[0].phone}</h1>
              <h1>Address: {data[0].address}</h1>
              <h1>Food Available: {data[0].food}</h1>
              <Link to={`https://www.google.com/maps/dir/${locations[1].latitude},${locations[1].longitude}/30.350369,76.378296`} target='_blank'>Click here for Directions</Link>
            </div>
          )}
        </div>
      )}
       </div>
       </>
    )
}

export default Maps;
