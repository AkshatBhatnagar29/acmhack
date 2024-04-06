
import React, { useState, useEffect } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Map.css";

function Maps({ showButton = false }) { // Setting default props to false
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
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else if (!isLocationEnabled && watchId) {
            navigator.geolocation.clearWatch(watchId);
            setUserLocation(null); // Reset user location when tracking is disabled
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
        }
    };

    return (
        <>
           
            <Map
                mapboxAccessToken="pk.eyJ1IjoiYWtrdTI5NzUiLCJhIjoiY2x1b2V5MG1jMTd6dDJrb2YzeXNiN2llbSJ9.9Lg8k-z7lxOGCEmLChggwA"
                style={{
                    width: "80vw",
                    height: "50vh",
                    borderRadius: "15px",
                    border: "2px solid red",
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
            {showButton && ( // Conditionally render the button based on the prop
                <button onClick={toggleLocation} className="btn">
                    {isLocationEnabled ? 'Disable Location' : 'Enable Location'}
                </button>
            )}
        </>
    );
}

export default Maps;
