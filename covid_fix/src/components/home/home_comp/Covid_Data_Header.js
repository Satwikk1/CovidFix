import React from 'react';
import axios from 'axios';
import '../index.css'
import CountUp from "react-countup"

export default class Covid_Data_Header extends React.Component {
  
  state = {
    covid_data: {},
    cases: [],
    totalconfirmed: 0,
    totaldeceased: 0,
    totalrecovered: 0,
    totalactive: 0,
  };

  componentDidMount() {
    axios.get(`https://api.covid19india.org/data.json`).then(res => {
      this.setState({ covid_data: res.data });
      // console.log(this.state.covid_data.cases_time_series);
      // console.log(this.state.covid_data);
      this.setState({ cases: this.state.covid_data.cases_time_series });
      this.setState({ totalconfirmed: this.state.cases[this.state.cases.length - 1].totalconfirmed });
      this.setState({ totaldeceased: this.state.cases[this.state.cases.length - 1].totaldeceased });
      this.setState({ totalrecovered: this.state.cases[this.state.cases.length - 1].totalrecovered });
      this.setState({ totalactive: this.state.totalconfirmed - this.state.totaldeceased - this.state.totalrecovered });
      
    });

  }

  render() {
    return (

        <div className='my-5 container text-center'>
          <div className='section-title'>
            <h2>Current Cases</h2>
          </div>

          <div className='row mx-5' style={{}}>

            <div className="col" style={{  }} >
              <div className='mx-auto card total-confirmed' style={{minHeight: "15em", maxWidth: "13em"}}>
                {/* <img
                  src=''
                  className='img-responsive'
                  alt='Project Title'
                /> */}
                <h3 className="mt-4" style={{color: "#CD113B"}}>Total Confirmed</h3>
                <CountUp start={0} end={this.state.totalconfirmed} delay={0}>
                      {({ countUpRef }) => (
                          <h2 className="mt-2" style={{color: "#CD113B"}}>
                              <span ref={countUpRef} />
                          </h2>
                      )}
                </CountUp>
                
              </div>
            </div>

            <div className='col'>
              <div className='mx-auto card total-active' style={{minHeight: "15em", maxWidth: "13em"}}>
                {/* <img
                  src=''
                  className='img-responsive'
                  alt='Project Title'
                /> */}
                <h3 className="mt-4" style={{color: "#00917C"}}>Total Active</h3>
                <CountUp start={0} end={this.state.totalactive} delay={0}>
                      {({ countUpRef }) => (
                          <h2 className="mt-2" style={{color: "#00917C"}}>
                              <span ref={countUpRef} />
                          </h2>
                      )}
                </CountUp>
                
              </div>
            </div>

            <div className='col'>
              <div className='mx-auto card total-recovered' style={{minHeight: "15em", maxWidth: "13em"}}>
                {/* <img
                  src=''
                  className='img-responsive'
                  alt='Project Title'
                /> */}
                <h3 className="mt-4" style={{color: "#185ADB"}}>Total Recovered</h3>
                <CountUp start={0} end={this.state.totalrecovered} delay={0}>
                      {({ countUpRef }) => (
                          <h2 className="mt-2" style={{color: "#185ADB"}}>
                              <span ref={countUpRef} />
                          </h2>
                      )}
                </CountUp>
                
              </div>
            </div>

            <div className='col'>
              <div className='mx-auto card total-deceased' style={{minHeight: "15em", maxWidth: "13em"}}>
                {/* <img
                  src=''
                  className='img-responsive'
                  alt='Project Title'
                /> */}
                <h3 className="mt-4" style={{color: "#393E46"}}>Total Deceased</h3>
                <CountUp start={0} end={this.state.totaldeceased} delay={0}>
                      {({ countUpRef }) => (
                          <h2 className="mt-2" style={{color: "#393E46"}}>
                              <span ref={countUpRef} />
                          </h2>
                      )}
                </CountUp>
                
              </div>
            </div>

            
          </div>

        </div>

    )
}
}