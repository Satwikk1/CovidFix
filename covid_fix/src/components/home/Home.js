import React from 'react'
import BootstrapCarousel from '../../BootstrapCarousel';
import Container from 'react-bootstrap/Container'
import Navbar from '../../Navbar';

const Home = () => {
    return (
        <div style={{  
            backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045__480.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'100vh',
            padding:'0px'
          
          }}>
            <div className="App">
                <Navbar></Navbar>

                <Container style={{padding:'40px'}}>
                    <BootstrapCarousel></BootstrapCarousel>
                    <hr
                    style={{
                        color: 'black',
                        backgroundColor: 'black',
                        height: 3
                    }}
                />
                </Container>

                <Container>
                    <a>Almost all the components have diff JS files</a>
                </Container>`
            </div>
        </div>
    )
}

export default Home
