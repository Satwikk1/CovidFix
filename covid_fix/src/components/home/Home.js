import { useState, useEffect } from 'react'
import './Home.css';

import Navbar from '../common/Navbar/Nav';
import Footer from '../common/Footer/Footer';
import Fade from 'react-reveal/Fade'
import Covid_Data_Header from './home_comp/Covid_Data_Header';
import { Header } from './home_comp/header';
import { Prevention } from './home_comp/prevention';
import { About } from './home_comp/about';
import { Symptoms } from './home_comp/symptoms';
import JsonData from './home_data.json';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navbar />
      <Header data={landingPageData.Header} />
      <Fade>
        <Covid_Data_Header />
      </Fade>
      <Prevention data={landingPageData.Prevention} />
      <About data={landingPageData.About} />
      <Symptoms data={landingPageData.Symptoms} />
      <Footer />
    </div>
  )
}

export default App
