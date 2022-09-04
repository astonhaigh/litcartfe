import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
const SERVICE_ID = "service_tkpdiug";
const TEMPLATE_ID = "template_oz6n9j8";
const USER_ID = "fDjpz7Y_syLZ7MMrd";

class BookSlotFriday extends Component {

  render() {
    // const handleOnSubmit = (e) => {
    //   e.preventDefault();

    //  console.log(e.target);
    //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    //     .then((result) => {
          
    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Message Sent Successfully'
    //       })
    //     }, (error) => {
    //       console.log(error.text);
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Ooops, something went wrong',
    //         text: error.text,
    //       })
    //     });
    //   e.target.reset()
    // };
      return (

        <div className="booking-container">



          <div className='form-container'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciBYvhP2H7qxcqARmVBOlRbFWXrsZUN_WkcFrQutdf78OfAg/viewform?embedded=true" width="100%" height="100vh" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>

        
      );

  }
}

export default BookSlotFriday;