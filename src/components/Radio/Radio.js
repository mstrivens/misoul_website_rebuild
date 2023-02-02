import React from 'react';
import './Radio.scss'
import ShowGrid from '../ShowGrid/ShowGrid.js'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { promoGridItems } from '../../config.js'


function Radio() {
  // console.log("PROMO GRID ITEMS IN RADIO", promoGridItems)
  return (
  <div className="radio-page-wrapper">
    <h1 className="radio-page-title">Radio</h1>
    <p className="radio-page-info">A selection of our best picks, previous shows</p>
    <div className={`nav-menu-links-radio`}>
      <Link to='/misoul-picks' className='button-nav-radio'>Mi-Soul Picks</Link>
      <Link to='/catalogue' className='button-nav-radio'>Catalogue</Link>
      <Link to='/schedule' className='button-nav-radio'>Schedule</Link>
      <Link to='/residents' className='button-nav-radio'>Residents</Link>
      <Link to='/guests' className='button-nav-radio'>Guests</Link>
    </div>
    <div className=""></div>
    <Link to='/misoul-picks' className='grid-nav-title'>Mi-Soul Picks</Link>
    <p className="radio-page-info nested">A hand picked selection from our latest shows</p>
    <ShowGrid showGridItems={promoGridItems}/>
  </div>
  )
};

export default Radio;