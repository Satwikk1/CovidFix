import React, { Component } from 'react';
 
class Navbar extends Component {
  render() {
    return (
      <div className="navbar" style={{backgroundColor:'#faffd1'}}>
        <a>Welcome to <strong>Covid</strong>Fix (a temp nav)</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#" className="right">Contact</a>
      </div>
    );
  }
}
 
export default Navbar