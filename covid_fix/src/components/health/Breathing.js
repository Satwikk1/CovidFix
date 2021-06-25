import React from 'react'
import { Carousel } from 'react-bootstrap';
import './index.css';

const Breathing = (props) => {
    return (
        <div className="p-4 treatment">
            <div>
                <h1 style={{color: '#F5ABC9', marginBottom: "1em"}}>
                    <strong>Home Treatement...</strong>
                </h1>
            </div>
            <hr />
            <Carousel prevIcon={<span className="slider-btn">{"<"}</span>} nextIcon={<span className="slider-btn">{">"}</span>} interval={null}>
                <Carousel.Item>
                    <div>
                        <div>
                            <h2 style={{color: "#CDF0EA", marginBottom: ".7em"}}>Breathing</h2>
                        </div>
                        <div>
                            <p className="lead mb-5 mb-5">
                                Deep breathing restores lung function by using the diaphragm. 
                                Breathing through the nose strengthens the diaphragm and encourages the nervous system to relax and restore itself.
                                When recovering from a respiratory illness like COVID-19, it’s important not to rush recovery. 
                                This deep breathing exercise is broken up into phases to take into account individual ability. 
                                Start with Phase 1, and only increase repetitions or move to the next phase when you can complete the exercise without feeling too out of breath.
                            </p>
                            <h3 style={{color: "#CDF0EA"}}>Deep Breathing While On Your Back</h3>
                            <ul>
                                <li className="lead">Lie on your back and bend your knees so that the bottom of your feet are resting on the bed.</li>
                                <li className="lead">Place your hands on top of your stomach or wrap them around the sides of your stomach.</li>
                                <li className="lead">Close your lips and place your tongue on the roof of your mouth.</li>
                                <li className="lead">Breathe in through the nose and pull air down into your stomach where your hands are. Try to spread your fingers apart with your breath.</li>
                                <li className="lead">Slowly exhale your breath through the nose.</li>
                                <li className="lead">Repeat deep breaths for one minute.</li>
                            </ul>
                            
                            <div style={{height: "100vh", padding: "7%"}}>
                                <iframe 
                                    width="100%" 
                                    height="80%" 
                                    src="https://www.youtube.com/embed/-djU61psUFs" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                

                <Carousel.Item>
                    <div>
                        <div>
                            <h3 style={{color: "#CDF0EA", marginBottom: ".7em"}}>Yoga</h3>
                        </div>
                        <div>
                            <p className="lead mb-5"> 
                                COVID patients tend to experience low oxygen levels which is why medical experts advise frequent monitoring of oxygen saturation. One can use a pulse oximeter for it. 
                                While proning helps improve oxygen levels, Dr Naresh Trehan, chairman, Medanta, also suggests practising yoga to keep lungs healthy. One of the pranayams he recommends is anulom viyom, adding that the pranayam is effective in expanding the lungs.
                            </p>
                                <h3 style={{color: "#CDF0EA", marginBottom: ".7em"}}>How to do anulom vilom:</h3>
                            <ul>
                                <li className="lead">*Sit in a meditating pose, with your spine and neck straight. Now close your eyes.</li>
                                <li className="lead">Start with our outer wrists resting on your knees.</li>
                                <li className="lead">Fold the index and middle fingers of your right hand.</li>
                                <li className="lead">Close your right nostril with your thumb and inhale through your left nostril slowly and deeply.</li>
                                <li className="lead">Release your thumb. Close your left nostril with you ring finger of your right hand. Exhale slowly through the right nostril.</li>
                                <li className="lead">Repeat by inhaling from the left nostril.</li>
                            </ul>
                            
                            <div style={{height: "100vh", padding: "7%"}}>
                                <iframe 
                                    width="100%" 
                                    height="80%" 
                                    src="https://www.youtube.com/embed/297Eu5oneqQ" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                {/* Yoga */}

                <Carousel.Item>
                    <div>
                        <div>
                            <h3 style={{color: "#CDF0EA", marginBottom: ".7em"}}>Mental Health</h3>
                        </div>
                        <div>
                            <p className="lead">
                                Fear, worry, and stress are normal responses to perceived or real threats, and at times when we are faced with uncertainty or the unknown. So it is normal and understandable that people are experiencing fear in the context of the COVID-19 pandemic. 
                                Added to the fear of contracting the virus in a pandemic such as COVID-19 are the significant changes to our daily lives as our movements are restricted in support of efforts to contain and slow down the spread of the virus. Faced with new realities of working from home, temporary unemployment, home-schooling of children, and lack of physical contact with other family members, friends and colleagues, it is important that we look after our mental, as well as our physical, health. 
                                WHO, together with partners, is providing guidance and advice during the COVID-19 pandemic for health workers, managers of health facilities, people who are looking after children, older adults, people in isolation and members of the public more generally, to help us look after our mental health.
                            </p>
                            
                            <div style={{height: "100vh", padding: "7%"}}>
                                <iframe 
                                    width="100%" 
                                    height="80%" 
                                    src="https://www.youtube.com/embed/LIOxKVrVRy4" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                {/* mental health */}

                <Carousel.Item>
                    <div>
                        <div>
                            <h3 style={{color: "#CDF0EA", marginBottom: ".7em"}}>Nutrition</h3>
                        </div>
                        <div>
                            <p className="lead">
                                Proper nutrition and hydration are vital.
                                 People who eat a well-balanced diet tend to be healthier with stronger immune systems and lower risk of chronic illnesses and infectious diseases.
                                  So you should eat a variety of fresh and unprocessed foods every day to get the vitamins, minerals, dietary fibre, protein and antioxidants your body needs.
                                   Drink enough water. Avoid sugar, fat and salt to significantly lower your risk of overweight, obesity, heart disease, stroke, diabetes and certain types of cancer.
                            </p>
                            <h3 className="mb-5" style={{color: "#B3E283"}}>Eat Green and Wet</h3>
                            <hr />
                            <strong><h5 className="mb-5" style={{color: "#CDF0EA"}}>Eat fresh and unprocessed foods every day</h5></strong>
                            <ul>
                                <li className="lead">Eat fruits, vegetables, legumes (e.g. lentils, beans), nuts and whole grains (e.g. unprocessed maize, millet, oats, wheat, brown rice or starchy tubers or roots such as potato, yam, taro or cassava), and foods from animal sources (e.g. meat, fish, eggs and milk).</li>
                                <li className="lead">Daily, eat: 2 cups of fruit (4 servings), 2.5 cups of vegetables (5 servings), 180 g of grains, and 160 g of meat and beans (red meat can be eaten 1−2 times per week, and poultry 2−3 times per week).</li>
                                <li className="lead">For snacks, choose raw vegetables and fresh fruit rather than foods that are high in sugar, fat or salt.</li>
                                <li className="lead">Do not overcook vegetables and fruit as this can lead to the loss of important vitamins.</li>
                                <li className="lead">When using canned or dried vegetables and fruit, choose varieties without added salt or sugar.</li>
                            </ul>
                            <hr />
                            <strong><h5 style={{color: "#CDF0EA"}}>Drink enough water every day</h5></strong>
                            <ul>
                                <li className="lead">Water is essential for life. It transports nutrients and compounds in blood, regulates your body temperature, gets rid of waste, and lubricates and cushions joints.</li>
                                <li className="lead">Drink 8–10 cups of water every day.</li>
                                <li className="lead">Water is the best choice, but you can also consume other drinks, fruits and vegetables that contain water, for example lemon juice (diluted in water and unsweetened), tea and coffee. But be careful not to consume too much caffeine, and avoid sweetened fruit juices, syrups, fruit juice concentrates, fizzy and still drinks as they all contain sugar.</li>
                            </ul>
                            
                            <div style={{height: "100vh", paddingLeft: "6%", paddingRight: "6%", paddingTop: "3%", paddingBottom: "0"}}>
                                <iframe 
                                    width="100%" 
                                    height="80%" 
                                    src="https://www.youtube.com/embed/9RcnGNHKfSs" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                {/* Eatings */}
            </Carousel>
        </div>
    )
}

export default Breathing
