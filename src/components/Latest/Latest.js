import ShowGrid from '../ShowGrid/ShowGrid.js'
import {catalogueGridItems} from '../../config.js'

function Latest() {
  console.log("MISOUL PICKS PROMO", catalogueGridItems)
  return (
  <div className="radio-page-wrapper">
    <h1 className="grid-nav-title">Latest Shows</h1>
    <p className="radio-page-info nested">All our latest shows in one place</p>
    <ShowGrid showGridItems={catalogueGridItems}/>
  </div>
  )
};

export default Latest;