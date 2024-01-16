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

  var popupMovement = 0;
  let initialTouchY;

  useEffect(() => {
    const popupElement = document.getElementById('js-popup');
    setPopup(popupElement);
  }, []);

  function changeCurrentPlot(spot) {
    setCurrentPlot(plots.find((p) => p.id === spot.entity_id));
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

  return (
    <section>
      <section className='perspectiveSection'>
        <svg version="1.1" width="45%" viewBox="626.3302583026234 56.3302583025943 668.3394833947532 668.3394833948114" id="svgParentElement">
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