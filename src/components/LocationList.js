import React, { Component } from 'react';
import Day from './Day';
import { Link } from 'react-router-dom'


class LocationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      locationInfo: []
    }
  }

  async componentDidMount() {
    let response = await fetch("https://litcart.herokuapp.com/api/location-infos");
    if (!response.ok) {
      console.log('NOT OK');
      return
    } 

    let locationInfo = await response.json()
    this.setState({ loading: false, locationInfo: locationInfo })
  }

  render() {
    if (!this.state.loading) {
      return (
        
        <div className="dayList">

          <div className="daysList-container">
            {this.state.locationInfo.data.map((locationInfo, index) => {
               
     

              return (
              
      
                <div className="dayDate-item" key={locationInfo.id}>
                  <Link to={`/location/${locationInfo.id}`}>
                    <div className={`banner`}>
                      <span>Cart location</span>
                    </div>
                    <div className="main-tile">
                      <div className="dow">
                        <span>{locationInfo.attributes.locationName}</span>
                      </div>
                    </div>
                    
                  </Link>
                </div>
              );
            })}
          </div>
   
          
      
        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default LocationList;