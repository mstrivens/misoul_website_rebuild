import React, { useState } from 'react';
import './EventsGrid.scss'

function EventsGrid(EventsGridItems) {
  return (
  <div className="events-grid-wrapper">
    {EventsGridItems.EventsGridItems.map(gridItem => {
      return (
      <div className="events-grid-item">
        <img 
        src={gridItem.image} 
        className="events-grid-item-image"
        alt="image"/>
        <div className="events-grid-item-name">
          {gridItem.name}
        </div>
        <div className="events-grid-item-date">
          {gridItem.date}
        </div>
      </div>
      )
    })}
  </div>
  )
};

export default EventsGrid;