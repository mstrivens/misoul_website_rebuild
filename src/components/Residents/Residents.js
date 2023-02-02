import InfoGrid from '../InfoGrid/InfoGrid.js'
import {residentDjsList} from '../../config.js'
import './Residents.scss'

function Residents() {
  return (
  <div className="residents-page-wrapper">
    <h1 className="grid-nav-title">Residents DJs</h1>
    <p className="radio-page-info nested">A hand picked selection from our latest shows</p>
    <InfoGrid InfoGridItems={residentDjsList}/>
  </div>
  )
};

export default Residents;