import React, { useState } from 'react';
import '../styles/3d.css';
import { Link } from 'react-router-dom';
import HomeCard from './cards/HomeCard';

import jsonData from '../assets/wonen-in-de-kuil.json';


function PerspectiveRegion23Page() {
  const { plots } = jsonData;
  const { hotspots } = jsonData;
  const plothotspots = hotspots.filter((hotspot) => hotspot.layer_id === 23);
  const [currentPlot, setCurrentPlot] = useState(plots[0]);

  function changeCurrentPlot(spot) {
    setCurrentPlot(plots.find((p) => p.id === spot.entity_id));
  }
  return (
    <section className='perspectiveSection'>
      <svg version="1.1" width="45%" viewBox="626.3302583026234 56.3302583025943 668.3394833947532 668.3394833948114" id="svgParentElement">
        <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/211/woningzoeker_zijaanzicht_dijk.jpg"></image>
        {plothotspots.map((hotspot) => (
          <polygon key={hotspot.svg} onClick={() => changeCurrentPlot(hotspot)} points={hotspot.svg} fill={plots.find((p) => p.id === hotspot.entity_id).status === 'verkocht' ? 'red' : plots.find((p) => p.id === hotspot.entity_id).status === 'in-optie' ? 'orange' : 'green'} fillOpacity="0.5" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
        ))}
      </svg>
      {currentPlot && (
        <HomeCard
          key={currentPlot.id}
          home={currentPlot.number}
          price={currentPlot.price}
          type={currentPlot.type}
          parking={currentPlot.parking_count}
          m2={currentPlot.living_surface}
          room_count={currentPlot.room_count}
          status={currentPlot.status}
        />
      )}
    </section>
  )
}

export default PerspectiveRegion23Page