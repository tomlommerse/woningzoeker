import React from 'react'
import { Link } from 'react-router-dom';

import jsonData from '../assets/wonen-in-de-kuil.json';


function perspectiveRegion155Page() {
    const { hotspots } = jsonData;
    const plothotspots = hotspots.filter((hotspot) => hotspot.layer_id === 155);
    return (
        <section className='3dSection'>
            <svg version="1.1" width="100%" viewBox="-351.9637681161985 -921.9637681158492 2624.9275362319313 2624.927536231815" id="svgParentElement">
                <image width="1920" height="780" href="https://backend.woningzoekerheijmans.nl/storage/1753/woningzoeker_blokD_PaulKrugerstraat.jpg"></image>
                {plothotspots.map((hotspot) => (
                    <Link key={hotspot.svg} to={`/3D/${hotspot.entity_id}`}>
                        <polygon points={hotspot.svg} fill="#74f570" fillOpacity="0.5" color="#74f570" opacity="0.9" width="1" strokeOpacity="0" stroke="white" strokeWidth="3"></polygon>
                    </Link>
                ))}
            </svg>
        </section>
    )
}

export default perspectiveRegion155Page