import React, { useState, useEffect } from 'react';
import '../styles/3d.css';
import '../styles/card.css';
import { Link } from 'react-router-dom';

import jsonData from '../assets/wonen-in-de-kuil.json';


function PerspectivePage() {
  const { hotspots } = jsonData;
  const regions = hotspots.filter((hotspot) => hotspot.layer_id === 21);
  const [theSection, setSection] = useState(null);
  const [svg, setSvg] = useState(null);
  const [svgStandard, setSvgStandard] = useState(null);

  useEffect(() => {
    const theSectionElement = document.getElementById('js-3dsection');
    setSection(theSectionElement);
    const svgElement = document.getElementById('js-svg');
    setSvg(svgElement);
    setSvgStandard(svgElement.getBoundingClientRect().width * 0.5);
  }, []);

  var svgMovement = -svgStandard;

  let lastTouchX;

  function sectionDrag(event) {
    let clientX = 0;
    if (theSection) {
      if (event.type === 'mousemove') {
        clientX = event.movementX;
        svgMovement = svgMovement + clientX;
      } else if (event.type === 'touchmove') {
        if (lastTouchX) {
          clientX = event.touches[0].clientX - lastTouchX;
        }
        lastTouchX = event.touches[0].clientX;
        svgMovement = svgMovement + clientX;
      }
      if (svgMovement > (600 + -svgStandard)) {
        svgMovement = (600 + -svgStandard);
      } else if (svgMovement < (-600 + -svgStandard)) {
        svgMovement = (-600 + -svgStandard);
      }
      console.log(svgMovement)
      svg.style.transform = `translateX(${(svgMovement)}px)`;
    }
  }

  useEffect(() => {
    if (theSection) {
      theSection.addEventListener("mousedown", () => {
        theSection.addEventListener("mousemove", sectionDrag);
      });
      document.addEventListener("mouseup", () => {
        theSection.removeEventListener("mousemove", sectionDrag)
        lastTouchX = undefined;
      });
      theSection.addEventListener("touchstart", () => {
        theSection.addEventListener("touchmove", sectionDrag);
      });
      document.addEventListener("touchend", () => {
        theSection.removeEventListener("touchmove", sectionDrag);
        lastTouchX = undefined;
      });
    }
  }, [theSection]);

  return (
    <section className='unscrollable'>
      <section id='js-3dsection' className='perspectiveSection'>
        <svg id="js-svg" version="1.1" width="180%" viewBox="590.8673469388159 20.8673469388159 739.2653061223682 739.2653061224264">
          <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/207/overzicht_woningzoeker_allefases.jpg"></image>
          {regions.map((hotspot) => (
            <Link key={hotspot.svg} to={`/3D/${hotspot.entity_id}`}>
              <polygon points={hotspot.svg} fill="#74f570" fillOpacity="0.5" color="#74f570" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
            </Link>
          ))}
        </svg>
      </section>
    </section>
  )
}

export default PerspectivePage