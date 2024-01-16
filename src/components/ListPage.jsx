// src/components/ListPage.js
import React, { useState, useEffect } from 'react';
import HomeCard from './cards/HomeCard';
import ListPageMainFilter from './Woningpagina/filter/ListPageMainFilter';
import jsonData from '../assets/wonen-in-de-kuil.json';
import FilterOverlay from './Filteroverlay';
import './Woningpagina/filter/filterbutton.css';

const ListPage = () => {
    const { plots } = jsonData;

    const [activeFilter, setActiveFilter] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [parkingCount, setParkingCount] = useState(null);
    const [filterOptions, setFilterOptions] = useState([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    // Extract unique plot types from the JSON data
    useEffect(() => {
        const types = Array.from(new Set(plots.map((plot) => plot.type)));
        setFilterOptions(['Alle Woningen', ...types]);
    }, [plots]);

    useEffect(() => {
        // Get the filters from the localstorage (add this when adding a filter )
        const storedType = localStorage.getItem('selectedType');
        const storedMinPrice = localStorage.getItem('minPrice');
        const storedMaxPrice = localStorage.getItem('maxPrice');
        const storedParkingCount = localStorage.getItem('parking_count');

        setActiveFilter(storedType);
        setMinPrice(storedMinPrice);
        setMaxPrice(storedMaxPrice);
        setParkingCount(storedParkingCount);
    }, []);

    const handleFilterClick = (type) => {
        setActiveFilter(type);
    };

    //add the logic for how to filter here
    const filteredPlots = plots.filter((plot) => {
        const typeCondition = !activeFilter || plot.type === activeFilter;
        const priceCondition =
            (!minPrice || plot.price >= parseFloat(minPrice)) &&
            (!maxPrice || plot.price <= parseFloat(maxPrice));
        const parkingCondition =
            (!parkingCount || plot.parking_count === parseInt(parkingCount));

        return typeCondition && priceCondition && parkingCondition;
    });

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

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

            {/*overlay openen*/}
            <button className="filter_button" onClick={openOverlay}>
                <img src="./img/icon/filter.svg"/>
            </button>
            {isOverlayOpen && <FilterOverlay onClose={closeOverlay} />}

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
