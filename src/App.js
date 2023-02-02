import './App.css';
import Radio from './components/Radio/Radio.js'
import BannerPlayer from './components/BannerPlayer/BannerPlayer.js'
import GalleryCarousel from './components/GalleryCarousel/GalleryCarousel.js'
import Logo from './assets/misoul-logo.png'
import { bannerPlayerInfo, residentDjsList } from './config.js'
import MisoulPicks from './components/MisoulPicks/MisoulPicks.js'
import Catalogue from './components/Catalogue/Catalogue.js'
import Residents from './components/Residents/Residents.js'
import Events from './components/Events/Events.js'
import Latest from './components/Latest/Latest.js'
import Schedule from './components/Schedule/Schedule.js'

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from "react-router-dom";


function App() {
  const bannerPlayerProps = bannerPlayerInfo
  const [dropDownActive, setDropdownActive] = useState('')
  const [playerTriggered, setplayerTriggered] = useState(false);

  function toggleDropdownMenu() {
    dropDownActive === '' ? setDropdownActive('-active'): setDropdownActive('')
  }

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className='nav-bar'>
            <a href="/" className="home-page-link">
              <img className="logo" src={Logo} alt="logo"/>
            </a>
            <div className={`nav-menu-links${dropDownActive}`}>
              <NavLink to='/radio' className='button-nav'>Radio</NavLink>
              <NavLink to='/latest' className='button-nav'>Latest</NavLink>
              <NavLink to='/explore' className='button-nav'>Explore</NavLink>
              <NavLink to='/events' className='button-nav'>Events</NavLink>
            </div>
          </div>
          <a 
            className="dropdown-menu-icon" 
            onClick={() => toggleDropdownMenu()}
            >
            <i className="dropdown-menu-bars">
              <svg className="dropdown-menu-image" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                <title>Menu 2</title>
                <path d="M107,143H507v64H107Zm0,128H507v64H107Zm0,128H507v64H107Z"></path>
              </svg>
            </i>
          </a>
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
            <BannerPlayer station={bannerPlayerProps[0]} playerTriggered={playerTriggered} setplayerTriggered={setplayerTriggered}/>
            <BannerPlayer station={bannerPlayerProps[1]} playerTriggered={playerTriggered} setplayerTriggered={setplayerTriggered}/>
          </div>
        </div>
        <div>
        <Routes>
        <Route exact path='/' element={< GalleryCarousel />}>
        </Route>
          <Route exact path='/radio' element={< Radio />}></Route>
          <Route exact path='/misoul-picks' element={< MisoulPicks />}></Route>
          <Route exact path='/catalogue' element={< Catalogue />}></Route>
          <Route exact path='/residents' element={< Residents />}></Route>
          <Route exact path='/events' element={< Events />}></Route>
          <Route exact path='/latest' element={< Latest />}></Route>
          <Route exact path='/schedule' element={< Schedule />}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
