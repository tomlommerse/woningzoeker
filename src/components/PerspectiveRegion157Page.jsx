import React from 'react'
import '../styles/3d.css';
import { Link } from 'react-router-dom';

import jsonData from '../assets/wonen-in-de-kuil.json';


function PerspectiveRegion157Page() {
    const { plots } = jsonData;
    const { hotspots } = jsonData;
    const plothotspots = hotspots.filter((hotspot) => hotspot.layer_id === 157);
    return (
        <section className='perspectiveSection svgTranslateY'>
            <svg version="1.1" width="200%" viewBox="-351.9637681161985 -921.9637681158492 2624.9275362319313 2624.927536231815" id="svgParentElement">
                <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/1757/woningzoeker_blokD.jpg"></image>
                {plothotspots.map((hotspot) => (
                    <Link key={hotspot.svg} to={`/${plots.find((p) => p.id === hotspot.entity_id).number}`}>
                        <polygon points={hotspot.svg} fill={plots.find((p) => p.id === hotspot.entity_id).status === 'verkocht' ? 'red' : plots.find((p) => p.id === hotspot.entity_id).status === 'in-optie' ? 'orange' : 'green'} fillOpacity="0.5" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
                    </Link>
                ))}
            </svg>
        </section>
    )
}

export default PerspectiveRegion157Page