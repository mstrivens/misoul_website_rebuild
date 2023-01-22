import React from 'react';
import './Radio.scss'
import ShowGrid from '../ShowGrid/ShowGrid.js'
// import { Link } from 'react-router-dom';

function Radio() {
  return (
  <div className="radio-page-wrapper">
    <h1 className="radio-page-title">Radio</h1>
    <p className="radio-page-info">A selection of our best picks, previous shows</p>
    <ShowGrid />
  </div>
  )
};

export default Radio;