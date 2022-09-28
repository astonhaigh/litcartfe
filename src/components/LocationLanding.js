import React, { Component } from 'react';
import LocationList from './/LocationList';
import { Link } from 'react-router-dom'

class LocationLandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      landingPage: []
    }
  }

  async componentDidMount() {
    let response = await fetch("https://litcart.herokuapp.com/api/locations-landing-page");
    if (!response.ok) {
      return
    } 

    let landingPage = await response.json()
    this.setState({ loading: false, landingPage: landingPage })
  }

  

  render() {
    
    if (!this.state.loading) {
      
      const landingP = this.state.landingPage;
      console.log(this.state.landingPage.data);
      return (
        
        <div className="landing-page">
          
          <div className="landing-content">
            <div className='landing-intro'>
              <div className="intro-image">
                  <div className="image-el">
                    <img src="./loc.svg" width="100%" />
                  </div>
              </div>
              <div className="intro-content">
              <h1>Cart Locations</h1>
                <p>Find below the available cart locations, and information regarding cart placement, and directions.</p>
              </div>
              
            </div>
           
          </div>
          <div className="day-list-container">
            
              <LocationList></LocationList>
            
          </div>
        </div>
        
      );
      
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default LocationLandingPage;