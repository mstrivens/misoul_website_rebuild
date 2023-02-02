import React, { useState } from 'react';
import './InfoGrid.scss'

function InfoGrid(InfoGridItems) {
  return (
  <div className="info-grid-wrapper">
    {InfoGridItems.InfoGridItems.map(gridItem => {
      return (
      <div className="info-grid-item">
        <img 
        src={gridItem.image} 
        className="info-grid-item-image"
        alt="image"/>
        <div className="info-grid-item-name">
          {gridItem.name}
        </div>
        <div className="info-grid-item-regularity">
          {gridItem.timing}
        </div>
      </div>
      )
    })}
  </div>
  )
};

export default InfoGrid;