import EventsGrid from '../EventsGrid/EventsGrid.js'
import {eventsList} from '../../config.js'
import './Events.scss'

function Events() {
  return (
  <div className="events-page-wrapper">
    <h1 className="grid-nav-title">Events</h1>
    <p className="radio-page-info nested">Our hottest events and best DJs for your party needs!</p>
    <EventsGrid EventsGridItems={eventsList}/>
  </div>
  )
};

export default Events;