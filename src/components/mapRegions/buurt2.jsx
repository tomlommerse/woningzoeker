import React, { useState, useEffect } from 'react';
import '../../styles/3d.css';
import '../../styles/card.css';
import Test from '../../assets/Test_2.jpg';
import Tags from '../cards/tags';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import jsonData from '../../assets/wonen-in-de-kuil.json';
import '../../styles/map.css';


import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import TestMap from '../../assets/mapZoomedBuurt2.1.jpg';

const MAP = TestMap

function Buurt2() {


    const { plots, hotspots } = jsonData;
    const plothotspots = hotspots.filter((hotspot) => hotspot.layer_id === 200);
    const [currentPlot, setCurrentPlot] = useState(plots[0]);
    const [popup, setPopup] = useState(null);
    const navigate = useNavigate()


    useEffect(() => {
        const popupElement = document.getElementById('js-popup');
        setPopup(popupElement);
    }, []);
    
    var popupMovement = 0;
    let initialTouchY;
    let popupMoved;

    function changeCurrentPlot(spot) {
        setCurrentPlot(plots.find((p) => p.id === spot.entity_id));
        console.log(spot)
        if (popup) {
        popup.classList.remove("hide");
        popup.style.transform = `translateX(-50%) translateY(${popupMovement}px)`;
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
        if (popupMoved) {
          if (popup) {
            let adres = document.getElementById('adres');
            if (popupMovement > 50) {
              popup.style.transform = `translateX(-50%) translateY(150%)`;
              popup.classList.add("hide");
              popupMovement = 0;
            } else if (popupMovement < -100) {
              navigate(`/${adres.innerHTML}`);
            } else {
              popupMovement = 0;
              popup.style.transform = `translateX(-50%) translateY(${popupMovement}px)`;
            }
            initialTouchY = undefined;
          }
        }
    }

    useEffect(() => {
        if (popup) {
          popup.addEventListener("mousedown", () => {
            popup.addEventListener("mousemove", onDrag);
            popupMoved = true;
          });
          document.addEventListener("mouseup", () => {
            popup.removeEventListener("mousemove", onDrag);
            onDragStop();
            popupMoved = undefined;
          });
          popup.addEventListener("touchstart", () => {
            popup.addEventListener("touchmove", onDrag);
            popupMoved = true;
          });
          document.addEventListener("touchend", () => {
            popup.removeEventListener("touchmove", onDrag);
            onDragStop();
            popupMoved = undefined;
          });
        }
      }, [popup]);

    function mapLeft(){
        let img = document.getElementById("js-mapimg");
        
        if (img.style.left === '0%') {
          img.style.left = '50%';
        }else{
          img.style.left = '100%';}
    }
        
    function mapRight(){
        let img = document.getElementById("js-mapimg");
        if (img.style.left === '100%') {
          img.style.left = '50%';
        }else{
          img.style.left = '0%';}
    }

    return (
        <section className='mapSection'>
          <div className='mapImgContainer'>
            {/* <img   src={MAP} alt="" useMap='#workmap'/> */}
            <svg id='js-mapimg' className='mapImg' width="800" height="800" xmlns="http://www.w3.org/2000/svg">
            <image href={MAP} alt="" />

            {plothotspots.map((hotspot) => {
                const plot = plots.find((p) => p.id === hotspot.entity_id);
                const fillColor = plot.status === 'verkocht' ? '#FF0000' : plot.status === 'in-optie' ? '#FFA500' : '#04B900';

                return (
                    <polygon
                        key={hotspot.svg}
                        onClick={() => changeCurrentPlot(hotspot)}
                        points={hotspot.svg}
                        fill={fillColor}
                        fillOpacity="0.5"
                        opacity="0.9"
                        stroke="white"
                        strokeWidth="3"
                    />
                );
            })}
        </svg>
            
            {/* <svg viewBox="0 0 800 800">
                <image id='js-mapimg' className='mapImg' src={MAP} alt=""/>
                {plothotspots.map((hotspot) => (
                    <polygon key={hotspot.svg} onClick={() => changeCurrentPlot(hotspot)} points={hotspot.svg} fill={plots.find((p) => p.id === hotspot.entity_id).status === 'verkocht' ? '#FF0000' : plots.find((p) => p.id === hotspot.entity_id).status === 'in-optie' ? '#FFA500' : '#04B900'} fillOpacity="0.5" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
                ))}
            </svg> */}

              <Link to={"/kaart"}>
                <button className='terugKnop' style={{left: 0}}>
                <ArrowBigLeft/>
                </button>
              </Link>
            
            <button onClick={mapLeft} className="mapImgNavbutton" style={{left: 0}}>
                <ArrowBigLeft/>
            </button>
            <button onClick={mapRight} className="mapImgNavbutton" style={{right: 0}}>
                <ArrowBigRight/>
            </button>
          </div>
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


export default Buurt2