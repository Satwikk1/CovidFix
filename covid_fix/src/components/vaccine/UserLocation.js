import React from 'react'
import './index.css'
import { useState, useEffect } from 'react';
import axios from "axios";

const UserLocation = (props) => {

    const [CardLength, setCardLength] = useState(0)
    useEffect(() => {
        axios.get("https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat="+props.userLocation.latitude+"&long="+props.userLocation.longitude)
        .then(
            (result)=>{
                props.onSetCenterDetails(result.data.centers);
                props.onSetFCenterDetails(true);
                setCardLength(result.data.centers.length);
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
        props.onSetLoading(false);
    }, [props])

    return (
        <div className="d-flex container mt-4">
            <iframe
                title="maps"
                width={"400px"}
                height={"300px"}
                style={{border: "0", zIndex: 'inherit'}}
                className="user-location-map"
                src={'https://www.google.com/maps/embed/v1/place?key='+props.token+'&q='+props.userLocation.latitude+','+props.userLocation.longitude}>
            </iframe>
            <div className="centers-nearby">
                <h1 className="mb-4">Vaccination centers near you</h1>
                <h1 style={{fontSize: "100px"}}>{CardLength}</h1>
            </div>
        </div>
    )
}

export default UserLocation
