import ShowGrid from '../ShowGrid/ShowGrid.js'
import {promoGridItems} from '../../config.js'

function MisoulPicks() {
  console.log("MISOUL PICKS PROMO", promoGridItems)
  return (
  <div className="radio-page-wrapper">
    <h1 className="grid-nav-title">Mi-Soul Picks</h1>
    <p className="radio-page-info nested">A hand picked selection from our latest shows</p>
    <ShowGrid showGridItems={promoGridItems}/>
  </div>
  )
};

export default MisoulPicks;