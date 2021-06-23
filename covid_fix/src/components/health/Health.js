import React from 'react'
import Navigation from '../common/Navbar/Nav'
import { Image } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce'
import Flip from 'react-reveal/Flip'
import { Accordion } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

const Health = (prosp) => {
    return (
       /* <div><Navigation/></div>*/
        
        <Container style={{
            padding: '30px'
        }}>
            <h1>navspace--------</h1>

            <h2 style={{
                color: 'grey'
            }}><strong>Symptoms</strong></h2>
            <hr style={{
                size: "30"
            }}></hr>


            <Row style={{

                padding: '15px',


            }}>
                <Col sm={8} style={{
                    padding: '10px',
                    fontSize: '25px'
                }}>
                    <ul>
                        <Bounce left>
                            <li><div style={{ transition: 'width 2s linear 1s' }}>Fever</div></li>

                            <li>Tiredness</li>

                            <li>Dry <strong>Cough</strong></li>

                            <li>Diarrhoea</li>
                            <li>Conjunctivitis</li>
                            <li>Headache</li>
                        </Bounce>



                    </ul>
                </Col>
                <Col sm={4}>
                    <Image
                        img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4N2AvBVazrV9_ZTIQ9JYOAVkJCb0WZYsVQ&usqp=CAU"} alt="cur"
                        height={300}
                        width={350}

                        style={{ alignSelf: 'center', borderRadius: '25px' }}
                    />
                </Col>
            </Row>
            <hr></hr>

            <Fade left>
                <h2>Prevent Corona....</h2>

            </Fade>
            <hr></hr>
            <Container>
                <Row>
                    <Fade left>
                        <Col sm={8} style={{ width: '440px' }}>
                            <h3>Wear a mask</h3>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col sm={4}>
                            <img src="https://www.gstatic.com/healthricherkp/campaigns/wear-mask-save-lives/UZ9ZuX.svg" style={{ height: '80px' }}></img>
                        </Col>
                    </Fade>
                </Row>
                <Row>
                    <Fade left>
                        <Col sm={8} style={{ width: '440px' }}>

                            <h3>Clean your hands</h3>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col sm={4}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIwUJYHOFozKHwxSYuNoxrXoYjuRWIx1TRQ&usqp=CAU" style={{ height: '105px', marginLeft: '-12px' }}></img>

                        </Col>
                    </Fade>
                </Row>
                <Row>
                    <Fade left>
                        <Col sm={8} style={{ width: '440px' }}>

                            <h3>Maintain safe distance</h3>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col sm={4}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKznYC1z7sjCPhBOlVQNzFvMwbEBeT5CaVQ&usqp=CAU" style={{ height: '95px' }}></img>

                        </Col>
                    </Fade>
                </Row>
                <Row>
                    <Fade left>
                        <Col sm={8} style={{ width: '440px' }}>

                            <h3>Get Vaccinated</h3>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col sm={4}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfG87dNPYufV8FYmXE1wkFBDbe7Mnw-3hbnA&usqp=CAU" style={{ height: '80px' }}></img>

                        </Col>
                    </Fade>
                </Row>
            </Container>
            <hr></hr>
            <Fade left>
                <h2>Breathe.. healthy not <strong style={{ color: "red" }}> Covid</strong></h2>
            </Fade>

            <hr></hr>

            <Container>
                <Row>
                    <Col>
                        <Flip>
                            <Card style={{ width: '18rem' }}>
                                <iframe width="286" height="180" src="https://www.youtube.com/embed/qSYJePpP7Uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <Card.Body>
                                    <Card.Title>Breathing Excercise :1</Card.Title>
                                    <Card.Text>
                                        A quick excercise to increase your lungs.
                                    </Card.Text>
                                    <a href="https://www.youtube.com/watch?v=qSYJePpP7Uw" target="_blank"><Button variant="primary">Watch here!!</Button></a>
                                </Card.Body>
                            </Card>
                        </Flip>

                    </Col>
                    <Col>
                        <Flip>
                            <Card style={{ width: '18rem' }}>
                                <iframe width="286" height="180" src="https://www.youtube.com/embed/ZU4sSOmf8To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                <Card.Body>
                                    <Card.Title>Breathing Excercise :2</Card.Title>
                                    <Card.Text>
                                        Something new everyday, another excercise for you.
                                    </Card.Text>
                                    <a href="https://www.youtube.com/watch?v=ZU4sSOmf8To" target="_blank"><Button variant="primary">Watch here!!</Button></a>
                                </Card.Body>
                            </Card>
                        </Flip>

                    </Col>
                    <Col>
                        <Flip>
                            <Card style={{ width: '18rem' }}>
                                <iframe width="286" height="180" src="https://www.youtube.com/embed/-djU61psUFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                <Card.Body>
                                    <Card.Title>Breathing Excercise :3</Card.Title>
                                    <Card.Text>
                                        Learn it from the doctors. Increase lung power
                                    </Card.Text>
                                    <a href="https://www.youtube.com/watch?v=H-S1MtV5Pio" target="_blank"><Button variant="primary">Watch here!!</Button></a>
                                </Card.Body>
                            </Card>
                        </Flip>

                    </Col>
                </Row>
            </Container>


        </Container>



    )
}

export default Health
