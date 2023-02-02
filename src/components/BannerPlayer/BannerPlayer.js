import React, {useState, useEffect} from 'react';
import {scheduleList} from '../../config.js'
import './BannerPlayer.scss'
import { setLiveShow } from '../../functions/utils.js'

function BannerPlayer({station, playerTriggered, setplayerTriggered}) {
  const [radioOn, setRadioOn] = useState(false);
  // let iframeLoading = '';
  const [iframeLoading, setiframeLoading] = useState(false);
  const [nowPlaying, setnowPlaying] = useState('');

  useEffect(() => {
    if (playerTriggered !== station.stationNumber) {
      setRadioOn(false);
    }
    setnowPlaying(setLiveShow(scheduleList))
  })

  function playRadio(radioOn) { 
    setplayerTriggered(station.stationNumber)
    setiframeLoading(true);
    var frame = document.getElementById("radio-iframe");
    if (frame && !radioOn) {
      frame.innerHTML = `<iframe class="radio-player" width="100%" height="60" src=${station.playerUrl} allow="accelerometer; autoplay";> </iframe>`;
    } else if (frame && radioOn) {
      frame.innerHTML = null
    }
    setRadioOn(!radioOn)
    const timeoutValue = station.stationNumber === 1 ? 3000 : 1000
    setTimeout(() => {
      setiframeLoading(false);
  }, timeoutValue)
  }

  function togglePlayIcon(radioOn) {
    if (!radioOn) {
      return (
        <svg className="play-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        <title>Play</title>
        <g id="_x33_--Hidden-_x28_closing-up_x29_-" transform="translate(-772 -385)">
          <g id="Drawer" transform="translate(0 43)">
            <g id="_x32_" transform="translate(18)">
              <path id="play" d="M1260.4 651.3L882.8 861.2c-4.4 2.4-8.2 2.7-11.2 1-3.1-1.7-4.6-5.1-4.6-10.2V433.2c0-4.8 1.5-8.2 4.6-10.2 3.1-2 6.8-1.7 11.2 1l377.6 210c4.4 2.4 6.6 5.3 6.6 8.7 0 3.3-2.2 6.2-6.6 8.6z">
              </path>
            </g>
          </g>
        </g>
      </svg>
      )
    } else if (radioOn && iframeLoading) {
      return (
        <div className="loading-spinner"></div>
      )
    } else {
      return (
        <svg className="play-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <title>Stop</title>
          <path d="M446.4 145H153.6c-4.7 0-8.6 3.9-8.6 8.6v292.8c0 4.7 3.9 8.6 8.6 8.6h292.8c4.7 0 8.6-3.9 8.6-8.6V153.6c0-4.7-3.9-8.6-8.6-8.6z" id="Layer_2">
          </path>
        </svg>
      )
    }
  } 
  
  return (
    <div className="banner-player-wrapper">
      <span className="live-dot"></span>
      <div className="banner-player-station-number">{station.stationNumber}</div>
      <span className="play-button">
      <div id="radio-iframe"></div>
      <a className="radio-icon-tag"
        onClick={() => playRadio(radioOn)}>
        {togglePlayIcon(radioOn)}
      </a>
    </span>
    <p className="playing-now-text">{nowPlaying}</p>
    <div className="banner-player-station-title">{station.stationTitle}</div>
  </div>
  )
};

export default BannerPlayer;