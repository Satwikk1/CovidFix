import React from 'react'
import { useState } from 'react'
import './index.css'

const Centers = (props) => {
    let data = props.centerDetails.map((center)=>{
        return(
            <div onClick={()=>handleClick(props.centerDetails.indexOf(center))} className="card col my-3 mx-auto justify-content-center center-card">
                <img src="https://i.pinimg.com/736x/3e/66/6e/3e666e50854f4069c37150d7e8c9bdc2.jpg" className="card-img-top card-header" alt="center"></img>
                <div className="card-body">
                    <h5 className="card-title">{center.name}</h5>
                    <p className="card-text"><b>Location: </b>{center.location}</p>
                    <p className="card-text"><b>District: </b>{center.district_name}</p>
                    <p className="card-text"><b>center id: </b>{center.center_id}</p>
                </div>
            </div>
        )
    })
    const [CenterDetails, setCenterDetails] = useState(data);

    const Maps = (object)=>{
        let query = 'https://www.google.com/maps/embed/v1/place?key='+props.token+'&q='+object.search;
        return (
            <iframe
            title="maps"
            width={object.width}
            height={object.height}
            style={{border: "0", zIndex: 'inherit'}}
            src={query}>
            </iframe>
        )
    }

    const handleClick=(e)=>{
        let array = [];
        for(let i=0; i<props.centerDetails.length; i++){
            if(i===e){
                array.push(
                        <div style={{boxShadow: "0 18px 32px 0 rgba(0, 0, 0, 0.2), 0 8px 28px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "#FAF1E6"}} onClick={()=>handleClick(i)} className="card col my-3 mx-auto justify-content-center center-card">
                            <img src="https://i.pinimg.com/736x/3e/66/6e/3e666e50854f4069c37150d7e8c9bdc2.jpg" className="card-img-top card-header" alt="center"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.centerDetails[i].name}</h5>
                                <p className="card-text"><b>Location: </b>{props.centerDetails[i].location}</p>
                                <p className="card-text"><b>District: </b>{props.centerDetails[i].district_name}</p>
                                <p className="card-text"><b>center id: </b>{props.centerDetails[i].center_id}</p>
                            </div>
                        </div>
                );
                array.push(
                    <div style={{boxShadow: "0 18px 32px 0 rgba(0, 0, 0, 0.2), 0 8px 28px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "#FAF1E6"}} onClick={()=>handleClick(i)} className="card my-3">
                            {Maps({search: props.centerDetails[i].name, width: "100%", height: "500px"})}
                    </div>
                )
            }
            else{
                array.push(
                <div onClick={()=>handleClick(i)} className="card col my-3 mx-auto justify-content-center center-card">
                <img src="https://i.pinimg.com/736x/3e/66/6e/3e666e50854f4069c37150d7e8c9bdc2.jpg" className="card-img-top card-header" alt="center"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.centerDetails[i].name}</h5>
                    <p className="card-text"><b>Location: </b>{props.centerDetails[i].location}</p>
                    <p className="card-text"><b>District: </b>{props.centerDetails[i].district_name}</p>
                    <p className="card-text"><b>center id: </b>{props.centerDetails[i].center_id}</p>
                </div>
            </div>);
            }
        }
        setCenterDetails(array);
    }

    return (
        <div className="container center-list row mx-auto mt-5 row-cols-1">
            {CenterDetails}
        </div>
    )
}

export default Centers
