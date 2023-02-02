import {scheduleList} from '../../config.js'
import './Schedule.scss'
import React, {useEffect} from 'react';

function Schedule() {

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

  useEffect(() => {
    const scrollToElement = document.querySelector(".timeslot-live-dot");
    scrollTo(document.documentElement, scrollToElement.offsetTop, 1200)
  })

  return (
  <div className="events-page-wrapper">
    <h1 className="grid-nav-title">Schedule</h1>
    <div className="daily-broadcast-wrapper">
      {scheduleList.map(dailyScheduleObj => {
        const dateFormatted = new Date(dailyScheduleObj.date)
        const formattedDateString = dateFormatted.toLocaleDateString('en-gb', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
        const weekDate = formattedDateString.split(', ').at(-1)
        // console.log("FORMATTED DATE", weekDate)
        return (
          <ul className="daily-broadcast-list" key={dailyScheduleObj.date}>
            <div className="daily-broadcast-header">
            <div className="daily-broadcast-header-day">{dailyScheduleObj.day}</div>
            <span className="daily-broadcast-header-date">, {weekDate}</span>
            </div>
            {dailyScheduleObj.schedule.map(dailySchedule => {
              // Create array with start and finish times for each show
              let timeLimitArray = dailySchedule.time.split(" - ")
              // Create a date + time straing for start and finish time for each show
              let showStartTimeString = `${dailyScheduleObj.date}T${timeLimitArray.at(0)}`
              let showEndTimeString = `${dailyScheduleObj.date}T${timeLimitArray.at(-1)}`
              // Create a date string object for the start and finish time for each show
              let showStartDateString = new Date(showStartTimeString)
              let showEndDateString = new Date(showEndTimeString)
              // Create a timestamp in millisecond for the start and finish for each show
              let showStartTimestamp = showStartDateString.getTime()
              let showEndTimestamp = showEndDateString.getTime()
              // Create a timestamp for the current time
              let timeNow = new Date().getTime()
              return (
                <li className="timeslot-info" key={showStartTimestamp}>
                  <div className="timeslot-time">{dailySchedule.time}</div>
                  <div className="timeslot-live-now">
                    {showStartTimestamp < timeNow && timeNow < showEndTimestamp ? 
                      <span className="timeslot-live-dot"></span> : <span></span>}
                  </div>
                  <div className="timeslot-dj">{dailySchedule.dj}</div>
                </li>
              )
            })}
          </ul>
        )
      })}
    </div>
  </div>
  )
};

export default Schedule;