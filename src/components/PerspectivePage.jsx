import React from 'react'
import '../styles/3d.css';
import { Link } from 'react-router-dom';

import jsonData from '../assets/wonen-in-de-kuil.json';


function perspectivePage() {
  const { hotspots } = jsonData;
  const regions = hotspots.filter((hotspot) => hotspot.layer_id === 21);
  return (
    <section className='perspectiveSection'>
      <svg version="1.1" width="75%" viewBox="590.8673469388159 20.8673469388159 739.2653061223682 739.2653061224264" id="svgParentElement">
        <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/207/overzicht_woningzoeker_allefases.jpg"></image>
        {regions.map((hotspot) => (
          <Link key={hotspot.svg} to={`/3D/${hotspot.entity_id}`}>
            <polygon points={hotspot.svg} fill="#74f570" fillOpacity="0.5" color="#74f570" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
          </Link>
        ))}
      </svg>
    </section>
  )
}

export default perspectivePage