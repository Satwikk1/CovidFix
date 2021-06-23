import React from 'react'
import './index.css'
import { useEffect } from 'react'


const VaccineStatus = (props) => {

    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
                props.onSetUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    set: true
                })
                props.FuserLocation(true)
            }, function showError(error) {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied the request for Geolocation.")
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable.")
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out.")
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred.")
                        break;
                    default:
                }
              })
        }
        else{
            alert("GeoLocation is not supported by this browser, some feature of this website may not work!")
        }
        }, [props])


    return (
        <div>
            <div className="container app-header">
                <h3 className="text-center">Vaccine</h3>
                <div className="vaccine-card-body">
                    <div className="vaccine-card-box">
                        <h5 className="vaccine-card-box-heading">Daily</h5>
                            {/* <h1>2923482</h1> */}
                        <h1>{props.vaccineStatus.daily_vaccinations}</h1>
                    </div>
                    <div className="vaccine-card-box">
                            <h5 className="vaccine-card-box-heading">Total</h5>
                            <div className="d-flex">
                                <h1 className="vaccine-card-numbers">{props.vaccineStatus.total_vaccinations}</h1>
                                <div className="type-border d-flex"></div>
                            </div>
                    </div>
                    <div className="vaccine-card-box">
                            <h5 className="vaccine-card-box-heading">Daily per million</h5>
                            {/* <h1>2923</h1> */}
                            <h1>{props.vaccineStatus.daily_vaccinations_per_million}</h1>
                    </div>
                </div>
            </div>{/* HEADER CARD  */}
            {/* {props.loading?null:} */}
            {/* <UserLocation loading={props.loading} onSetLoading={props.onSetLoading} userLocation={geoLocation} token={props.token}/> */}
        </div>
    )
}

export default VaccineStatus
