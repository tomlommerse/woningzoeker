import React, { useState, useEffect } from 'react';
import '../styles/3d.css';
import '../styles/card.css';
import Test from '../assets/Test_2.jpg';
import Tags from './cards/tags';

import jsonData from '../assets/wonen-in-de-kuil.json';


function PerspectiveRegion23Page() {
  const { plots, hotspots } = jsonData;
  const plothotspots = hotspots.filter((hotspot) => hotspot.layer_id === 23);
  const [currentPlot, setCurrentPlot] = useState(plots[0]);
  const [popup, setPopup] = useState(null);
  const [theSection, setSection] = useState(null);
  const [svg, setSvg] = useState(null);
  const [svgStandard, setSvgStandard] = useState(null);

  useEffect(() => {
    const popupElement = document.getElementById('js-popup');
    setPopup(popupElement);
    const theSectionElement = document.getElementById('js-3dsection');
    setSection(theSectionElement);
    const svgElement = document.getElementById('js-svg');
    setSvg(svgElement);
    setSvgStandard(svgElement.getBoundingClientRect().width * 0.5);
  }, []);

  var popupMovement = 0;
  var svgMovement = -svgStandard;

  let initialTouchY;
  let lastTouchX;

  function changeCurrentPlot(spot) {
    setCurrentPlot(plots.find((p) => p.id === spot.entity_id));
    console.log(spot)
    if (popup) {
      popup.classList.remove("hide");
    }
  }

  function onDrag(event) {
    let clientY;
    if (popup) {
      if (event.type === 'mousemove') {
        clientY = event.movementY;
        popupMovement = popupMovement + clientY;
      } else if (event.type === 'touchmove') {
        if (initialTouchY === undefined) {
          initialTouchY = event.touches[0].clientY;
        }
        if (clientY === undefined) {
          clientY = event.touches[0].clientY - initialTouchY;
        } else {
          clientY = event.touches[0].clientY - initialTouchY - clientY;
        }
        popupMovement = clientY;
      }
      popup.style.transform = `translateX(-50%) translateY(${popupMovement}px)`;
    }
  }



  function onDragStop() {
    if (popup) {
      let adres = document.getElementById('adres');
      if (popupMovement > 50) {
        popup.style.transform = `translateX(-50%) translateY(150%)`;
        popupMovement = 0;
      } else if (popupMovement < -100) {
        window.location.href = `/${adres.innerHTML}`;
      } else {
        popupMovement = 0;
        popup.style.transform = `translateX(-50%) translateY(${popupMovement}px)`;
      }
      initialTouchY = undefined;
    }
  }

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
      if (svgMovement > (800 + -svgStandard)) {
        svgMovement = (800 + -svgStandard);
      } else if (svgMovement < (-800 + -svgStandard)) {
        svgMovement = (-800 + -svgStandard);
      }
      svg.style.transform = `translateX(${(svgMovement)}px)`;
    }
  }

  useEffect(() => {
    if (popup) {
      popup.addEventListener("mousedown", () => {
        popup.addEventListener("mousemove", onDrag);
      });
      document.addEventListener("mouseup", () => {
        popup.removeEventListener("mousemove", onDrag);
        onDragStop();
      });
      popup.addEventListener("touchstart", () => {
        popup.addEventListener("touchmove", onDrag);
      });
      document.addEventListener("touchend", () => {
        popup.removeEventListener("touchmove", onDrag);
        onDragStop();
      });
    }
  }, [popup]);

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
    <section>
      <section id='js-3dsection' className='perspectiveSection'>
        <svg id="js-svg" version="1.1" width="180%" viewBox="626.3302583026234 56.3302583025943 668.3394833947532 668.3394833948114">
          <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/211/woningzoeker_zijaanzicht_dijk.jpg"></image>
          {plothotspots.map((hotspot) => (
            <polygon key={hotspot.svg} onClick={() => changeCurrentPlot(hotspot)} points={hotspot.svg} fill={plots.find((p) => p.id === hotspot.entity_id).status === 'verkocht' ? '#FF0000' : plots.find((p) => p.id === hotspot.entity_id).status === 'in-optie' ? '#FFA500' : '#04B900'} fillOpacity="0.5" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
          ))}
        </svg>
      </section>
      {currentPlot && (
        <div id="js-popup" className='plotPopup hide'>
          <div className="imgArea">
            <img draggable="false" id='img' src={Test} alt='house' />
            <p id='adres'>{currentPlot.number}</p>
            <p id='price' style={{ backgroundColor: (currentPlot.status === 'verkocht' ? '#FF0000' : currentPlot.status === 'in-optie' ? '#FFA500' : '#04B900') }}>
              €{currentPlot.price}
            </p>
          </div>
          <div className='tagList'>
            <Tags tagname={currentPlot.type} />
            <Tags tagname={`${currentPlot.parking_count} parkeerplaatsen`} />
            <Tags tagname={`${currentPlot.living_surface} m²`} />
            <Tags tagname={`${currentPlot.room_count} kamers`} />
            <Tags tagname={currentPlot.status} />
          </div>
        </div>
      )}
    </section>
  )
}

export default PerspectiveRegion23Page