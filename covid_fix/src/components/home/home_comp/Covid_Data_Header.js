import React from 'react';
import axios from 'axios';

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
      <div id='portfolio' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Current Cases</h2>
          </div>
          <div className='row'>
            <div className='portfolio-items' style={{display: "inline-flex", paddingLeft: "120px"}}>

              <div style={{  }} >
                <div className='portfolio-item' style={{marginLeft: "40%"}}>
                  {/* <img
                    src=''
                    className='img-responsive'
                    alt='Project Title'
                  /> */}
                  <h3>Total Confirmed</h3>
                  <h4>{ this.state.totalconfirmed }</h4>
                  
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item' style={{marginLeft: "40%"}}>
                  {/* <img
                    src=''
                    className='img-responsive'
                    alt='Project Title'
                  /> */}
                  <h3>Total Active</h3>
                  <h4>{ this.state.totalactive }</h4>
                  
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item' style={{marginLeft: "40%"}}>
                  {/* <img
                    src=''
                    className='img-responsive'
                    alt='Project Title'
                  /> */}
                  <h3>Total Recovered</h3>
                  <h4>{ this.state.totalrecovered }</h4>
                  
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item' style={{marginLeft: "40%"}}>
                  {/* <img
                    src=''
                    className='img-responsive'
                    alt='Project Title'
                  /> */}
                  <h3>Total Deceased</h3>
                  <h4>{ this.state.totaldeceased }</h4>
                  
                </div>
              </div>

            
            </div>

          </div>
        </div>

    </div>
    )
}
}