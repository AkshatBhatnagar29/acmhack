
import React, { useState, useEffect } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Map.css";
import axios from 'axios';

function Maps({ showButton = false }) { 
    const [lng , setLng] = useState(76.3731228);
    const [lat , setLat] = useState(30.3498687);
    const [userLocation, setUserLocation] = useState(null);
    const [isLocationEnabled, setIsLocationEnabled] = useState(false);
    


    useEffect(() => {
        let watchId;
        if (isLocationEnabled && navigator.geolocation) {
            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    // setLat(position.coords.latitude);
                    // setLng(position.coords.longitude);
                    // console.log("User location latitude:", position.coords.latitude);
                    // console.log("User location longitude:", position.coords.longitude);
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else if (!isLocationEnabled && watchId) {
            navigator.geolocation.clearWatch(watchId);
            setUserLocation(null); 
        }
    
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId);
            }
        };
    }, [isLocationEnabled]);
   

    const toggleLocation = () => {
        if (isLocationEnabled) {
            alert("Please disable the location manually.");
        } else {
            setIsLocationEnabled(prevState => !prevState);
            axios.post('http://127.0.0.1:5000/location', {
               latitude:lat,
               longitude:lng
            })
            .then(function (response) {
              console.log(response);
              //console.log(response.data);
              // navigate("/home");
              alert("success");
          })
          .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("error");
            }
        });
    };
    }
    return (
        <>
           
            <Map
                mapboxAccessToken="pk.eyJ1IjoicHVzaHAwMTE5IiwiYSI6ImNsdW9nb3B1ZDFxcTgya2xpaHYwczVyd2YifQ.ZGKUgHIqEWyvaGuXoG2zkw"
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
                {userLocation && (
                    <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
                        <div style={{ color: 'red' }}></div>
                        <img src="/redmark.png" alt="error" className="marker"/>
                    </Marker>
                )}
                <div style={{ position: 'absolute', right: 0 }}>
                    <NavigationControl />
                </div>
            </Map>
            {showButton && ( 
                <button onClick={toggleLocation} className="btn btnHave">
                    {isLocationEnabled ? 'Disable Location' : 'Enable Location'}
                </button>
            )}
        </>
    );
}

export default Maps;
