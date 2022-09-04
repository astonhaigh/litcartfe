import React, { Component } from 'react';
import Day from './/Day';
import { Link } from 'react-router-dom'

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

class DayList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      days: []
    }
  }

  async componentDidMount() {
    let response = await fetch("https://litcart.herokuapp.com/api/days");
    if (!response.ok) {
      console.log('NOT OK');
      return
    } 

    let days = await response.json()
    this.setState({ loading: false, days: days })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="dayList">
       
          <div className="daysList-container">
            {this.state.days.data.map((days, index) => {
                const dateArr = days.attributes.date.split("-")
                const monthArrItem = dateArr[1]
                const dayArrItem = dateArr[2]
                const monthName = dateConverter(monthArrItem)
                const dateName = dateWordConvert(dayArrItem)
                const dotw = dayOTW(monthName, dayArrItem, dateArr[0])

              return (
              
         
                <div className="dayDate-item" key={days.id}>
                  <Link to={`days/${days.id}`}>
                    <div className={`banner ${dotw}`}>
                      <span>{monthName} {dateName}</span>
                    </div>
                    <div className="main-tile">
                      <div className="dow">
                        <span>{dotw}</span>
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

export default DayList;