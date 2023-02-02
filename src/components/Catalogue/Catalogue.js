import ShowGrid from '../ShowGrid/ShowGrid.js'
import {catalogueGridItems} from '../../config.js'
import './Catalogue.scss'
import { lazy, Suspense } from 'react';

function Catalogue() {
  const LazyShowGrid = lazy(() => import('../ShowGrid/ShowGrid.js'));

  return (
  <div className="radio-page-wrapper">
    <h1 className="grid-nav-title">Catalogue</h1>
    <p className="radio-page-info nested">A comprehensive vault of all our shows by type</p>
    <div className="showgrid-list-wrapper">
      <h1 className="list-title">Soulful & Funky</h1>
      <ShowGrid showGridItems={catalogueGridItems}/>
    </div>
    <div className="showgrid-list-wrapper">
      <h1 className="list-title">Upbeat House</h1>
      <ShowGrid showGridItems={catalogueGridItems}/>
    </div>
    <div className="showgrid-list-wrapper">
      <h1 className="list-title">Reggae & Rare Grooves</h1>
      <Suspense fallaback={<></>}>
        <LazyShowGrid showGridItems={catalogueGridItems}/>
      </Suspense>
    </div>
  </div>
  )
};

export default Catalogue;