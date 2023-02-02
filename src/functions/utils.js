export function setLiveShow(scheduleList) {
  let liveShow
  scheduleList.forEach(dailyScheduleObj => {
    dailyScheduleObj.schedule.forEach(dailySchedule => {
      let liveNow
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
      if (showStartTimestamp < timeNow && timeNow < showEndTimestamp) {
        liveShow = dailySchedule.dj
      }
    })
  })
  return liveShow
}