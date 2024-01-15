// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import HomeCard from './cards/HomeCard';
import ListPageMainFilter from './Woningpagina/filter/ListPageMainFilter';
import jsonData from '../assets/wonen-in-de-kuil.json';
import './Woningpagina/filter/filterbutton.css';
import FilterOverlay from './Filteroverlay';

const ListPage = () => {
    const { plots } = jsonData;

    const [activeFilter, setActiveFilter] = useState(null);
    const [filterOptions, setFilterOptions] = useState([]);
    const [roomFilter, setRoomFilter] = useState(null);

    // Extract unique plot types from the JSON data
    useEffect(() => {
        const types = Array.from(new Set(plots.map((plot) => plot.type)));
        setFilterOptions(['Alle Woningen', ...types]);
    }, [plots]);

    const handleFilterClick = (type) => {
        setActiveFilter(type);
    };

    const handleRoomFilterChange = (selectedRoomFilter) => {
        setRoomFilter(selectedRoomFilter);
    };

    const filteredPlots = activeFilter
        ? plots.filter((plot) => plot.type === activeFilter)
        : plots;
    
    const applyRoomFilter = (plot) => {
        if (!roomFilter) {
            return true; // Geen kamerfilter geselecteerd, toon alle plots
        }
    
            
        if (roomFilter === "5+") {
            return plot.room_count >= 5; // Toon plots met 5 of meer kamers
        }
    
        return plot.room_count === parseInt(roomFilter); // Toon plots met het specifieke aantal kamers
        };
        
    const filteredPlotsByRoom = filteredPlots.filter(applyRoomFilter);

    // print de localstorage als je op de pagina komt
    useEffect(() => {
        console.log('LocalStorage:', localStorage);
    }, []);

    return (
        <main>
            <div className="filter-buttons">
                {filterOptions.map((filterType) => (
                    <ListPageMainFilter
                        key={filterType}
                        type={filterType}
                        isActive={activeFilter === filterType}
                        onClick={() => handleFilterClick(filterType)}
                    />
                ))}
            </div>
            <FilterOverlay onFilterChange={handleRoomFilterChange} />
            {filteredPlotsByRoom.map((plot) => (
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

export default ListPage;
