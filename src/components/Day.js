import React, { Component } from 'react';
import { Link, useNavigate} from 'react-router-dom'

function dateConverter(month){
  let monthString;
  switch (month) {
    case '01':
        monthString = 'January';
      break;
    case '02':
        monthString = 'February';
      break;
    case '03':
        monthString = 'March';
      break;
    case '04':
        monthString = 'April';
      break;
    case '05':
        monthString = 'May';
      break;  
    case '06':
        monthString = 'June';
      break;
    case '07':
        monthString = 'July';
      break;
    case '08':
        monthString = 'August';
      break;
    case '09':
        monthString = 'September';
      break;
    case '10':
        monthString = 'October';
      break;
    case '11':
        monthString = 'November';
      break;  
    case '12':
        monthString = 'December';
      break;  
  }

  return monthString;
  
}

function dateWordConvert(dateItem){
  const splitDate = dateItem.split("")
  const lastDig = splitDate[1]
  let lastword;
  switch (lastDig) {
    case '1':
      lastword = 'st';
      break;
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
       lastword = 'th';
      break;
    case '2':
        lastword = 'nd';
      break;
    case '3':
        lastword = 'rd';
      break;
  }

  if (splitDate[0] === "0"){
    console.log(lastDig);
    return lastDig + lastword
  } else {
    console.log('else');
    return dateItem + lastword
  }
  
}
function dayOTW(monthN, dateV, yearV){
  const dateC = monthN + ' ' + dateV + ', ' + yearV + ' 23:15:00'
  const dt = new Date(dateC)
  const dayVal = dt.getDay()
  let dayNameVal;

  console.log(dayVal);

  switch (dayVal) {
    case 1:
      dayNameVal = 'Monday';
      break;
    case 2:
      dayNameVal = 'Tuesday';
      break;
    case 3:
      dayNameVal = 'Wednesday';
      break;
    case 4:
      dayNameVal = 'Thursday';
      break;
    case 5:
      dayNameVal = 'Friday';
      break;
    case 6:
      dayNameVal = 'Saturday';
      break;
    case 0:
      dayNameVal = 'Sunday';
      break;
  }
 
  return dayNameVal;
}

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, day: {} }
  }

  async componentDidMount() {
    const dayId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    let response = await fetch(`https://litcart.herokuapp.com/api/days/${dayId}?populate=*`)
    let data = await response.json()
    this.setState({
      loading: false,
      day: data
    })
  }

  render() {
    
    const dataD = this.state.day.data;
  
    if (dataD != null){
        if (!this.state.loading) {
          const dateArr = dataD.attributes.date.split("-")
          const monthArrItem = dateArr[1]
          const dayArrItem = dateArr[2]
          const monthName = dateConverter(monthArrItem)
          const dateName = dateWordConvert(dayArrItem)
          const dotw = dayOTW(monthName, dayArrItem, dateArr[0])
          
        return (
          <div className="day">
            
            <div className="day_info">
              <h2 className="day-title">{dotw} {monthName} {dateName}</h2>
              {dotw == 'Friday'?<p>See below the schedule, both available slots &amp; booked slots.</p>: <p>See below the schedule, both available slots &amp; booked slots.</p>}
              <p>To view details about the cart location such as cart setup and directions, please go to the  <Link to="/cart-locations">"Cart locations"</Link> page</p>
              
              <div className="location-intro">
                <h3>Locations:</h3>
              </div>
              <div className="locations-container metro-container">
                {dataD.attributes.metroCartLocation.map((metroCartLocation, index) => {
                return (
                  <div className="location" key={metroCartLocation.id}>
                    <div className="location-title">
                      <h3>{metroCartLocation.metroTitle}</h3>
                    </div>
                    <div className="location-items">
                      <div className="location-item">
                        <div className="location-slot">7:00am - 8:30am:</div><div className="available">{metroCartLocation.metroFirst == 'Slot Available'? <span>*Slot Available*</span>: metroCartLocation.metroFirst}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">8:30am - 10:00am:</div><div className="available">{metroCartLocation.metroSecond == 'Slot Available'? <span>*Slot Available*</span>: metroCartLocation.metroSecond}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">10:00am - 11:30am:</div><div className="available">{metroCartLocation.metroThird == 'Slot Available'?<span>*Slot Available*</span>: metroCartLocation.metroThird}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">11:30am - 1:00pm:</div><div className="available">{metroCartLocation.metroFourth == 'Slot Available'?<span>*Slot Available*</span>: metroCartLocation.metroFourth}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">1:00pm - 2:30pm:</div><div className="available">{metroCartLocation.metroFifth == 'Slot Available'?<span>*Slot Available*</span>: metroCartLocation.metroFifth}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">2:30pm - 4:00pm:</div><div className="available">{metroCartLocation.metroSixth == 'Slot Available'?<span>*Slot Available*</span>: metroCartLocation.metroSixth}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">4:00pm - 5:30pm:</div><div className="available">{metroCartLocation.metroSeventh == 'Slot Available'?<span>*Slot Available*</span>: metroCartLocation.metroSeventh}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">5:30pm - 7:00pm:</div><div className="available">{metroCartLocation.metroEighth == 'Slot Available'?<span>*Slot Available*</span>: metroCartLocation.metroEighth}</div>
                      </div>
                    </div>
                    
                  </div>
              
                 );
                })}
                </div>
              <div className="locations-container">
                {dataD.attributes.locationGroup.map((locationGroups, index) => {
                return (
                  <div className="location" key={locationGroups.id}>
                    <div className="location-title">
                      <h3>{locationGroups.locationTitle}</h3>
                    </div>
                    <div className="location-items">
                    <div className="location-item">
                        <div className="location-slot">7:00am - 8:00am:</div><div className="available">{locationGroups.locationFirstShift == 'Slot Available'? <span>*Slot Available*</span>: locationGroups.locationFirstShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">8:00am - 9:00am:</div><div className="available">{locationGroups.locationSecondShift == 'Slot Available'? <span>*Slot Available*</span>: locationGroups.locationSecondShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">9:00am - 10:00am:</div><div className="available">{locationGroups.locationThirdShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationThirdShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">10:00am - 11:00am:</div><div className="available">{locationGroups.locationFourthShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationFourthShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">11:00am - 12:00pm:</div><div className="available">{locationGroups.locationFifthShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationFifthShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">12:00pm - 1:00pm:</div><div className="available">{locationGroups.locationSixthShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationSixthShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">1:00pm - 2:00pm:</div><div className="available">{locationGroups.locationSeventhShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationSeventhShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">2:00pm - 3:00pm:</div><div className="available">{locationGroups.locationEighthShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationEighthShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">3:00pm - 4:00pm:</div><div className="available">{locationGroups.locationNinthShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationNinthShift}</div>
                      </div>
                      <div className="location-item">
                        <div className="location-slot">4:00pm - 5:00pm:</div><div className="available">{locationGroups.locationTenthShift == 'Slot Available'?<span>*Slot Available*</span>: locationGroups.locationTenthShift}</div>
                      </div>
                    </div>
                    
                  </div>
              
                 );
                })}
              </div>
              
            </div>
            <div className="button-container">
            {dotw == 'Friday'?<Link to='/book-a-slot-friday'>Book Cart Shift</Link>: <Link to='/book-slot'>Request Slot</Link>}
            </div>
          </div>
        );
      }
    }

  

    return (<h2>Waiting for API...</h2>);
  }
}

export default Day;