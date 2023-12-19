import React from 'react'
import '../styles/map.css';
import Button from './Woningpagina/button.jsx';

import TestMap from '../assets/TestMap.jpg';

const MAP = TestMap


function MapPage() {
  return (
    <section className='mapSection'>
        <img className='mapImg' src={MAP} alt="" />
    </section>
  )
}

export default MapPage