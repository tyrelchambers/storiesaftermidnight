import React from 'react'
import promotions from './bundles.json';
import './HumbleBundles.scss';
import { distanceInWords } from 'date-fns';

export default function HumbleBundles() {
  
  return (
    <div className="bg-dark section-wrapper">
      <h1 className="section-title light">Humble Bundles</h1>
      <p className="section-description">I'm partnered with Humble Bundle. If you'd like to support the channel, and you like games, books, or software, consider buying one of these bundles! I get portion back from each purchase just so we are clear.</p>
      <div className="humble-bundle-list">
        {promotions.promotions.filter(x => x.type === "bundle").map((x, id) => {
          return(
            <div key={x.machine_name} className="humble-bundle" >
                <img src={x.tile_image} alt="" className="bg"/>
                <div className="humble-body">

                  <div className="humble-header">
                    <span className="humble-tile-img-wrapper">
                      <img src={x.tile_logo} alt="" className="tile-logo"/>
                    </span>
                  </div>

                  <div className="humble-footer">
                    <a className="humble-link" href={`https://www.humblebundle.com${x.product_url}?partner=storiesaftermidnight`}   rel="noopener noreferrer">{x.tile_short_name}</a>
                    <span className="end-date">
                      {getEndDateComparison(x.end_date)}
                    </span>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

const getEndDateComparison = (endDate) => {
  const currentDate = new Date(Date.now());
  const result = distanceInWords(currentDate.toISOString(), endDate);
  return result
}
