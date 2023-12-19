import React from 'react'
import '../styles/map.css';
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

import TestMap from '../assets/TestMap.jpg';

const MAP = TestMap


function MapPage() {
  function mapLeft(){
    let img = document.getElementById("js-mapimg");

    img.classList.remove("mapImgRight");
    img.classList.add("mapImgLeft");
  }
  function mapRight(){
    let img = document.getElementById("js-mapimg");

    img.classList.remove("mapImgLeft");
    img.classList.add("mapImgRight");
  }
  return (
    <section className='mapSection'>
      <div className='mapImgContainer'>
        <img id='js-mapimg' className='mapImg' src={MAP} alt="" />
        <button onClick={mapLeft} className="mapImgNavbutton" style={{left: 0}}>
            <ArrowBigLeft/>
        </button>
        <button onClick={mapRight} className="mapImgNavbutton" style={{right: 0}}>
            <ArrowBigRight/>
        </button>
      </div>
    </section>
  )
}

export default MapPage