import React from 'react'
import './index.css'
import { useState, useEffect } from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

const Navigation = (props) => {

    const [activeLink, setActiveLink] = useState('')
    useEffect(() => {
        let header = window.location.href;
        let link = '';
        for(let i=header.length-1; i>=0; i--){
            if(header[i]!=='/'){
                link=link+header[i];
            }
            else{
                link = link.split("").reverse().join("")
                setActiveLink(link);
                break;
            }
        }
    }, [])

    return (
        <div>
            {/* <nav className={"navigation"}>
                <div className={"navigation-heading rounded-pill px-3"}>
                    CovidFix
                </div>
                <div className={"navigation-items"}>
                    <ul className={"navigation-item"}>
                        <li className={"navigation-item-link mr-1"}><a href={"/health"}>Health</a></li>
                        <li className={"navigation-item-link ml-4 navigation-active"}><a href={"/vaccine"}>Vaccine</a></li>
                    </ul>
                </div>
            </nav> */}
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home">CovidFix</Navbar.Brand>
                        <Nav className="me-auto">
                        {/* <Nav.Link href="/home">Home</Nav.Link> */}
                        {/* {alert(activeLink)} */}
                        <Nav.Link active={activeLink==="health"? true: false} href="/health">Health</Nav.Link>
                        <Nav.Link active={activeLink==="vaccine"? true: false} href="/vaccine">Vaccine</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
