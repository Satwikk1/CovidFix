import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render(){
        return(
            <div id='footer'>
                <div className='container text-center'>
                    <p>
                        &copy; Sample Footer Text
                    </p>
                </div>
            </div>
        )
    }
}