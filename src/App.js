import './App.css';
import Radio from './components/Radio/Radio.js'
import BannerPlayer from './components/BannerPlayer/BannerPlayer.js'
import GalleryCarousel from './components/GalleryCarousel/GalleryCarousel.js'
import Logo from './misoul-logo.png'


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {
  const [bannerPlayerProps, setBannerPlayerProps] = useState([{
    stationTitle: "Mi-Soul", 
    showTitle: "Mastermind Roadshow",
    playerUrl: 'https://mi-soul.com/radioplayer/'
  },
  {
    stationTitle: "Mi-House", 
    showTitle: "Big DJ",
    playerUrl: 'https://mi-houseradio.com/radio/play'
  }])
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div class='nav-bar'>
            <a href="/">
              <img className="logo" src={Logo} alt="logo"/>
            </a>
            <Link to='/radio' className='button-nav'>Radio</Link>
            <Link to='/latest' className='button-nav'>Latest</Link>
            <Link to='/explore' className='button-nav'>Explore</Link>
            <Link to='/events' className='button-nav'>Events</Link>
          </div>
        </header>
        <div className="misoul-live-header">
          <div className="live-banner">
            <span className="live-now-text">
              LIVE NOW
            </span>
            <span className="live-dot">
            </span>
          </div>
          <div className="live-broadcast-banner">
            <BannerPlayer props={bannerPlayerProps}/>
          </div>
        </div>
        <div>
        <Routes>
        <Route exact path='/' element={< GalleryCarousel />}>
        </Route>
          <Route exact path='/radio' element={< Radio />}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
