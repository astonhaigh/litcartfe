// import logo from './logo.svg';
import './App.scss';
import React, { Component } from 'react';
import DayList from './components/DayList';
import LandingPage from './components/LandingPage';
import BookSlot from './components/BookSlot';
import BookSlotFriday from './components/BookSlotFriday';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Day from './components/Day';

function App() {

 
  const navigate = useNavigate();
  return (
    
    <div className="App">
      <div className="bg-grad">
      <header>
        <section className="nav-bar">
          <section className="logo-container">
            <Link to="/">
              <div className="logo-el">
                <div className="logo-img">
                  <img src="/logo.png" width="35px"/>
                </div>
                <div className="logo-text">
                  <span>litcart.co.uk</span>
                </div>
              </div>
            </Link>
          </section>
          <section className="home">
            <div className="home-button"><Link to="/"></Link></div>
          </section>
        </section>
      </header>
      <div className="landing-page">
        
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
      </div>
      </div>
      <main className="App-content">
        <div className="back-container">
        <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <Routes>
          <Route path="/days/:id" element={<Day />} />
          <Route path="/book-slot" element={<BookSlot />} />
          <Route path="/book-a-slot-friday" element={<BookSlotFriday />} />
          
        </Routes>
        
      </main>
  </div >
  );
}


export default App;
