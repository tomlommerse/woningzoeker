import React from 'react'
import '../../styles/map.css';
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

import TestMap from '../../assets/TestMap.jpg';

const MAP = TestMap

function buurt1() {
    function mapLeft(){
        let img = document.getElementById("js-mapimg");
        
        if (img.style.left === '10%') {
          img.style.left = '50%';
        }else{
          img.style.left = '90%';}
        }
        
      function mapRight(){
        let img = document.getElementById("js-mapimg");
        if (img.style.left === '90%') {
          img.style.left = '50%';
        }else{
          img.style.left = '10%';}
      }
    return (
        <section className='mapSection'>
          <div className='mapImgContainer'>
            {/* <img   src={MAP} alt="" useMap='#workmap'/> */}
            <img id='js-mapimg' className='mapImg' src={MAP} alt="" useMap='#workmap'/>
    
            <map name="workmap">
              
          </map>
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

export default buurt1