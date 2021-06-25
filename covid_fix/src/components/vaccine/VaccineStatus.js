import React from 'react'
import './index.css'
import { useEffect } from 'react'
import CountUp from 'react-countup'


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
                <h2 style={{color: 'white'}} className="text-center mt-3 pt-3">Vaccine</h2>
                <div className="vaccine-card-body">
                    <div className="vaccine-card-box">
                        <h5 className="vaccine-card-box-heading">Daily</h5>
                        <CountUp start={0} end={props.vaccineStatus.daily_vaccinations} delay={0}>
                            {({ countUpRef }) => (
                                <h1>
                                    <span ref={countUpRef} />
                                </h1>
                            )}
                        </CountUp>
                    </div>
                    
                    <div className="vaccine-card-box">
                            <h5 className="vaccine-card-box-heading">Total</h5>
                            <div className="d-flex">
                                <CountUp start={0} end={props.vaccineStatus.total_vaccinations} delay={0}>
                                    {({ countUpRef }) => (
                                        <h1 className="vaccine-card-numbers">
                                            <span ref={countUpRef} />
                                        </h1>
                                    )}
                                </CountUp>
                                <div className="type-border d-flex"></div>
                            </div>
                    </div>
                    <div className="vaccine-card-box">
                            <h5 className="vaccine-card-box-heading">Daily per million</h5>
                            <CountUp start={0} end={props.vaccineStatus.daily_vaccinations_per_million} delay={0}>
                            {({ countUpRef }) => (
                                <h1>
                                    <span ref={countUpRef} />
                                </h1>
                            )}
                        </CountUp>
                    </div>
                </div>
            </div>{/* HEADER CARD  */}
        </div>
    )
}

export default VaccineStatus
