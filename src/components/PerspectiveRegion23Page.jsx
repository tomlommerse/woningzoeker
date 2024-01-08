import React from 'react'
import { Link } from 'react-router-dom';

import jsonData from '../assets/wonen-in-de-kuil.json';


function perspectiveRegion23Page() {
  const { hotspots } = jsonData;
  const plothotspots = hotspots.filter((hotspot) => hotspot.layer_id === 23);
  return (
    <section className='3dSection'>
      <svg version="1.1" width="100%" viewBox="626.3302583026234 56.3302583025943 668.3394833947532 668.3394833948114" id="svgParentElement">
        <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/211/woningzoeker_zijaanzicht_dijk.jpg"></image>
        {plothotspots.map((hotspot) => (
          <Link key={hotspot.svg} to={`/3D/${hotspot.entity_id}`}>
            <polygon points={hotspot.svg} fill="#74f570" fillOpacity="0.5" color="#74f570" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
          </Link>
        ))}
      </svg>
    </section>
  )
}

export default perspectiveRegion23Page