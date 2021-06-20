import React from 'react'
import {Button} from 'react-bootstrap'


// THIS IS ONLY HELPER CLASS THIS FILE SHOWS THE LANDING PAGE THAT IS 'Localhost:3000' 

const Helper = () => {
    return (
        <div>
            <div className={"container text-center"} style={{minHeight: "100vh", paddingTop: "20%"}}>
            <h1 className={"helper-heading"}>CovidFix</h1>
            <Button className={"mr-4"} href={"/home"} variant="outline-primary">Home</Button>{' '}
            <Button className={"mr-4"} href={"/health"} variant="outline-success">Health</Button>{' '}
            <Button className={"mr-4"} href={"/vaccine"} variant="outline-info">Vaccine</Button>{' '}
      </div>
        </div>
    )
}

export default Helper
