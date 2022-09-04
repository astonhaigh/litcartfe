import React, { Component } from 'react';
import DayList from './/DayList';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      landingPage: []
    }
  }

  async componentDidMount() {
    let response = await fetch("https://litcart.herokuapp.com/api/landing-page");
    if (!response.ok) {
      return
    } 

    let landingPage = await response.json()
    this.setState({ loading: false, landingPage: landingPage })
  }

  

  render() {
    
    if (!this.state.loading) {
      
      const landingP = this.state.landingPage.data.attributes;
      return (
        
        <div className="landing-page">
          
          <div className="landing-content">
            <div className='landing-intro'>
              <div className="intro-image">
                  <div className="image-el">
                    <img src="./cal.svg" width="100%" />
                  </div>
              </div>
              <div className="intro-content">
              <h1>{landingP.landingTitle}</h1>
                <p>{landingP.introContent}</p>
              </div>
              
            </div>
            {/* <div className='landing-updates'>
              <div className="updates-title">
                <h3>Important updates/announcements:</h3>
              </div>
              <div className='updates-content'>
                {landingP.updatesAnnouncements}
              </div>
            </div> */}
          </div>
          <div className="day-list-container">
            <div className="day-list-content">
              <h2>Days available</h2>
              <p>Days in <span className="blue">blue</span> are regular cart days. Days in <span className="green">green</span> are Metro days.</p>
            </div>
              <DayList></DayList>
          </div>
        </div>
        
      );
      
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default LandingPage;