// src/components/HomePage.js
import React, { useState } from 'react';
import HomeCard from './cards/HomeCard';
import FilterButton from './Woningpagina/filter/FilterButton';
import jsonData from '../assets/wonen-in-de-kuil.json'; // Import your JSON file
import Detailpage from './Woningpagina/detailpage';
import FilterHuis from './FilterHuis/FilterHuis';

const HomePage = () => {
    const { plots } = jsonData;
    const huizen = plots; // Gebruik plots in plaats van [jsonData]
    const [filterTextValue, updateFilterText] = useState('all');

    function opFilterHuis(filterWaarde) {
        updateFilterText(filterWaarde);
    }

    const filterHuizenLijst = huizen.filter((huis) => {
        if (filterTextValue === 'verkocht') {
            return huis.status === "verkocht";
        } else if (filterTextValue === 'beschikbaar') {
            return huis.status === "te-koop";
        } else if (filterTextValue === 'in-optie'){
            return huis.status === "in-optie";
        } else {
            return huis;
        }
    });

    return (
        <main>
            <FilterHuis filterHuis={opFilterHuis}></FilterHuis>
            {filterHuizenLijst.map((huis) => (
            <HomeCard
            key={huis.id}  // Gebruik een andere unieke eigenschap als key, bijvoorbeeld 'id'
            home={huis.number}
            price={huis.price}
            type={huis.type}
            parking={huis.parking_count}
            m2={huis.living_surface}
            room_count={huis.room_count}
            status={huis.status}
    />
))}
        </main>
    );
};

export default HomePage;

