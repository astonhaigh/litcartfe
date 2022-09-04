import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BookSlot extends Component {

  render() {
 
      return (
        
        <div className="booking-container">
          <div className='form-container'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfntOGqND10RwKggRcowT809MS91nL8OkiomL7Qoyoaayuuyg/viewform?embedded=true" width="100%" height="100vh" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>
        
      );

  }
}

export default BookSlot;