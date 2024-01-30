import React from 'react';
import '../styles/map.css';
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { Link } from 'react-router-dom';

import TestMap from '../assets/TestMap.jpg';

const MAP = TestMap


function MapPage() {
  
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
          <Link to={"buurt2"}><area alt="buurt1" title="buurt1" coords="233,387 507,470 507,470 490,506 491,520 504,542 488,585 432,568 421,528 399,513 195,444 " shape="polygon"/></Link>
          <Link to={"buurt2"}><area alt="buurt4" title="buurt4" coords="357,159 483,30 500,33 515,61 589,41 600,77 569,85 553,77 544,93 376,196 " shape="polygon"/></Link>
          <Link to={"buurt2"}><area alt="buurt3" title="buurt3" coords="374,199 544,105 555,85 569,91 605,82 651,266 432,304 420,237 380,244 " shape="polygon"></area></Link>
          <Link to={"buurt2"}><area alt="buurt2" title="buurt2" coords="393,378 417,424 416,437 522,467 548,449 577,455 602,416 646,373 660,341 652,271 433,309 445,370 " shape="polygon"></area></Link> 
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

export default MapPage