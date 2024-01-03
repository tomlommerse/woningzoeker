// src/components/HomePage.js
import React from 'react';
import HomeCard from './cards/HomeCard';
import FilterButton from './Woningpagina/filter/FilterButton';
import jsonData from '../assets/wonen-in-de-kuil.json'; // Import your JSON file
import Detailpage from './Woningpagina/detailpage';

const HomePage = () => {
const { plots } = jsonData;

    return (
    <main>
        {/* {plots.map((plot) => (
        <Detailpage key={plot.number} home={plot.number} price={plot.price} type={plot.type} parking={plot.parking_count} m2={plot.living_surface} room_count={plot.room_count}/>
        ))} */}
        <Detailpage/>
        {/* {plots.map((plot) => (
        <HomeCard key={plot.number} home={plot.number} price={plot.price} type={plot.type} parking={plot.parking_count} m2={plot.living_surface} room_count={plot.room_count}/>
        ))}
        <FilterButton /> */}
    </main>
    );
};

export default HomePage;
