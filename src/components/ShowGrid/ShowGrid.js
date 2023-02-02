import React, { useState } from 'react';
import './ShowGrid.scss'

function ShowGrid(showGridItems) {
  return (
  <div className="show-grid-wrapper">
    {showGridItems.showGridItems.map(gridItem => {
      return (
      <div className="show-grid-item" loading="lazy">
        <img loading="lazy"
        src={gridItem.image} 
        className="thumbnail-image"
        alt="image"/>
        <iframe loading="lazy"
        className="mixcloud-player"
        width="100%" height="60" src={gridItem.src}> </iframe>
      </div>
      )
    })}
    {/* <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fa-latin-odyssey-a-conversation-about-food-music-and-culture-in-latin-america%2F" frameborder="0" ></iframe>
    <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fny-party-in-a-grassy-field%2F" frameborder="0" ></iframe> */}
  </div>
  )
};

export default ShowGrid;