// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import HomeCard from './cards/HomeCard';
import ListPageMainFilter from './Woningpagina/filter/ListPageMainFilter';
import jsonData from '../assets/wonen-in-de-kuil.json';
import './Woningpagina/filter/filterbutton.css';

const ListPage = () => {
    const { plots } = jsonData;

    const [activeFilter, setActiveFilter] = useState(null);
    const [filterOptions, setFilterOptions] = useState([]);

    // Extract unique plot types from the JSON data
    useEffect(() => {
        const types = Array.from(new Set(plots.map((plot) => plot.type)));
        setFilterOptions(['Alle Woningen', ...types]);
    }, [plots]);

    const handleFilterClick = (type) => {
        setActiveFilter(type);
    };

    const filteredPlots = activeFilter
        ? plots.filter((plot) => plot.type === activeFilter)
        : plots;

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

export default ListPage;
