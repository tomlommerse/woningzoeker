// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import HomeCard from './cards/HomeCard';
import jsonData from '../assets/wonen-in-de-kuil.json'; // Import your JSON file

const HomePage = () => {
    const [uniquePlots, setUniquePlots] = useState([]);
    const [selectedType, setSelectedType] = useState(null);


    const allTypes = [...new Set(uniquePlots.map((plot) => plot.type))];

    useEffect(() => {
        // verwijder duplicates
        const filteredPlots = jsonData.plots.filter(
        (plot, index, self) =>
            index === self.findIndex((p) => p.id === plot.id)
        );

        setUniquePlots(filteredPlots);
    }, []);

    const handleTypeButtonClick = (type) => {
        setSelectedType(type);
    };

    const filteredPlots = selectedType
        ? uniquePlots.filter((plot) => plot.type === selectedType)
        : uniquePlots;

    return (
        <main>
        <div>
            <button onClick={() => handleTypeButtonClick(null)}>All</button>
            {allTypes.map((type) => (
            <button key={type} onClick={() => handleTypeButtonClick(type)}>
                {type}
            </button>
            ))}
        </div>
        {filteredPlots.map((plot) => (
            <HomeCard
            key={plot.id}
            home={plot.number}
            price={plot.price}
            type={plot.type}
            parking={plot.parking_count}
            m2={plot.living_surface}
            room_count={plot.room_count}
            />
        ))}
        </main>
    );
};

export default HomePage;