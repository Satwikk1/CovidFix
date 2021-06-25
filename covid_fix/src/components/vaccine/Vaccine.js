// Later
import VaccineStatus from './VaccineStatus';
import UserLocation from './UserLocation';
import Centers from './Centers';
import Navigation from '../common/Navbar/Nav'
import Footer from '../common/Footer/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';





const Vaccine = (props) => {

    const [VaccineData, setVaccineData] = useState({})
    const [fVaccineData, setFVaccineData] = useState(false);
    const [CenterDetails, setCenterDetails] = useState([])
    const [fCenterDetails, setFCenterDetails] = useState(false)
    const [userLocation, setUserLocation] = useState({})
    const [fuserLocation, setFuserLocation] = useState(false)
    const [Loading, setLoading] = useState(true);
    const ApiToken = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json").then((res)=>{
            setVaccineData(res.data[94].data[res.data[94].data.length-1]);
            setFVaccineData(true);
        }).catch((err)=>{
            alert(err)
        })
    }, [])

    return(
        <div>
             <Navigation />
             {fVaccineData? <VaccineStatus FVaccineData={fVaccineData} FuserLocation={setFuserLocation} onSetUserLocation={setUserLocation} vaccineStatus={VaccineData} token={ApiToken}/>: null}
             {fuserLocation? <UserLocation onSetLoading={setLoading} onSetCenterDetails={setCenterDetails} onSetFCenterDetails={setFCenterDetails} userLocation={userLocation} token={ApiToken} /> : null}
             {fCenterDetails? <Centers token={ApiToken} centerDetails={CenterDetails} /> : null}
             {Loading? 
                <div style={{position: "absolute", backgroundColor: "white", width: "100%", height: "100%"}} className="pt-5 mt-5 d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> 
            :null}
            {Loading? null: <Footer />}
        </div>
       
    )
}

export default Vaccine