import React, { Component } from 'react';
import { Link, useNavigate} from 'react-router-dom'



class Location extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, locationInfo: {} }
  }

  async componentDidMount() {
    const locationId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    let response = await fetch(`https://litcart.herokuapp.com/api/location-infos/${locationId}?populate=*`)
    let data = await response.json()
    this.setState({
      loading: false,
      location: data
    })
  }

  render() {

  
    const locationD = this.state.location;
  
    if (locationD != null){
        if (!this.state.loading) {
       
          console.log(this.state.location.data)
          const locAttr = locationD.data.attributes;
          const locImage = "https://litcart.herokuapp.com" + locAttr.LocationImage.data.attributes.url;
          const locImageStyle = {
            backgroundImage: 'url(' + locImage  + ')'
          };
        return (
          
          <div className="location-info-item">
            <div className="location-title">
              <h1>{locAttr.locationName}</h1>
            </div>
            <div className="location-info">
              <div className="location-image" style={locImageStyle}>

              </div>
              <div className="location-content">
                <h2>{locAttr.InstructionTitle}</h2>
                <p>{locAttr.instructionContent}</p>
                <div className="map-link">
                <a target="_blank" href={locAttr.locationLink}>Check map location/directions here</a>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

  

    return (<h2>Waiting for API...</h2>);
  }
}

export default Location;