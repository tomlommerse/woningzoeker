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
    const [maxPlot_surface, setMaxPlot_surface] = useState(null);
    const [minPlot_surface, setMinPlot_surface] = useState(null);
    const [accessibility, setAccessibility] = useState('');

    const [filterOptions, setFilterOptions] = useState([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    useEffect(() => {
        const types = Array.from(new Set(plots.map((plot) => plot.type)));
        setFilterOptions(['', ...types]);
    }, [plots]);

    useEffect(() => {
        const storedType = localStorage.getItem('selectedType');
        const storedMinPrice = localStorage.getItem('minPrice');
        const storedMaxPrice = localStorage.getItem('maxPrice');
        const storedParkingCount = localStorage.getItem('parking_count');
        const storedMaxPlot_surface = localStorage.getItem('maxPlot_surface');
        const storedMinPlot_surface = localStorage.getItem('minPlot_surface');
        const accessibility_on = localStorage.getItem('accessibility');

        setActiveFilter(storedType);
        setMinPrice(storedMinPrice);
        setMaxPrice(storedMaxPrice);
        setParkingCount(storedParkingCount);
        setMaxPlot_surface(storedMaxPlot_surface);
        setMinPlot_surface(storedMinPlot_surface);
        setAccessibility(accessibility_on);
        console.log(accessibility)
        accessibility_check();
            console.log('LocalStorage:', localStorage);
    
    }, [accessibility]);

    const handleFilterClick = (type) => {
        setActiveFilter(type);
        localStorage.setItem('selectedType', type);
    };

    const accessibility_check = () => {
        console.log(accessibility)
        if (accessibility === "true") {
            console.log("accessibility_check is ON")
                document.getElementById("filterButton").setAttribute("class", "filter_button_Fixed");
        } else{
            console.log("accessibility_check is OFF")
        }
       
    }

    const filteredPlots = plots.filter((plot) => {
        const typeCondition = !activeFilter || plot.type === activeFilter;
        const priceCondition =
            (!minPrice || plot.price >= parseFloat(minPrice)) &&
            (!maxPrice || plot.price <= parseFloat(maxPrice));
        const parkingCondition =
            (!parkingCount || plot.parking_count === parseInt(parkingCount));
        const plot_surfaceCondition =
            (!minPlot_surface || plot.plot_surface >= parseFloat(minPlot_surface)) &&
            (!maxPlot_surface || plot.plot_surface <= parseFloat(maxPlot_surface));

        return typeCondition && priceCondition && parkingCondition && plot_surfaceCondition;
    });

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (
        <main>
            <div className="filter-buttons" id='filterButton'>
                {filterOptions.map((filterType) => (
                    <ListPageMainFilter
                        key={filterType}
                        type={filterType}
                        isActive={activeFilter === filterType}
                        onClick={() => handleFilterClick(filterType)}
                    />
                ))}
            </div>

            <button className="filter_button" onClick={openOverlay}>
                <img className="filterbuttonimg" alt='filters' src="./img/icon/filter.svg"/>
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
                    status={plot.status}
                />
            ))}
        </main>
    );
};

export default ListPage;
