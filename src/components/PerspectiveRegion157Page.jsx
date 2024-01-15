import React, { useState, useEffect } from 'react';
import '../styles/3d.css';
import '../styles/card.css';
import Test from '../assets/Test_2.jpg';
import Tags from './cards/tags';

import jsonData from '../assets/wonen-in-de-kuil.json';


function PerspectiveRegion157Page() {
    const { plots, hotspots } = jsonData;
    const plothotspots = hotspots.filter((hotspot) => hotspot.layer_id === 157);
    const [currentPlot, setCurrentPlot] = useState(plots[0]);
    const [popup, setPopup] = useState(null);

    var movementTotal = 0;

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

    function onDrag({ movementY }) {
        if (popup) {
            movementTotal = movementTotal + movementY;
            popup.style.transform = `translateX(-50%) translateY(${movementTotal}px)`;
        }
    }

    function onDragStop() {
        if (popup) {
            let adres = document.getElementById('adres');
            if (movementTotal > 50) {
                popup.style.transform = `translateX(-50%) translateY(150%)`;
                movementTotal = 0;
            } else if (movementTotal < -100) {
                window.location.href = `/${adres.innerHTML}`;
            } else {
                movementTotal = 0;
                popup.style.transform = `translateX(-50%) translateY(${movementTotal}px)`;
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
        <section className='perspectiveSection svgTranslateY'>
            <svg version="1.1" width="200%" viewBox="-351.9637681161985 -921.9637681158492 2624.9275362319313 2624.927536231815" id="svgParentElement">
                <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/1757/woningzoeker_blokD.jpg"></image>
                {plothotspots.map((hotspot) => (
                    <polygon key={hotspot.svg} onClick={() => changeCurrentPlot(hotspot)} points={hotspot.svg} fill={plots.find((p) => p.id === hotspot.entity_id).status === 'verkocht' ? '#FF0000' : plots.find((p) => p.id === hotspot.entity_id).status === 'in-optie' ? '#FFA500' : '#04B900'} fillOpacity="0.5" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
                ))}
            </svg>
            {currentPlot && (
                <div id="js-popup" className='homeCard plotPopup hide'>
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

export default PerspectiveRegion157Page