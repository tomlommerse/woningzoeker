// src/components/Woningpagina/filter/FilterOverlay.jsx
import React, { useState } from 'react';
import '../styles/FilterOverlay.css';
import Dropdown from '../components/homesearch/Dropdown';

const FilterOverlay = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [parkingCount, setParkingCount] = useState('');
  const [maxPlot_surface, setMaxPlot_surface] = useState('');
  const [minPlot_surface, setMinPlot_surface] = useState('');

  const search = () => {
    localStorage.setItem('selectedType', selectedType);
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('maxPrice', maxPrice);
    localStorage.setItem('parking_count', parkingCount);
    localStorage.setItem('maxPlot_surface', maxPlot_surface);
    localStorage.setItem('minPlot_surface', minPlot_surface);

    console.log('LocalStorage:', localStorage);

    onClose(); // Close the overlay after search
    window.location.reload(); // Reload the page
  };

  const handleRoomFilterChange = (event) => {
    setRoomFilter(event.target.value);
  };

  const applyFilters = () => {
    onFilterChange(roomFilter);
    toggleOverlay(); // Close the overlay after applying filters
  };

  return (
    <div className="filter-overlay">
      <h3 className='dropdownTitle'>Woningtype</h3>
      <Dropdown placeholder='Alle' dataKey="type" onChange={(value) => setSelectedType(value)} />

      <h3 className='dropdownTitle'>Aantal parkeerplaatsen</h3>
      <Dropdown placeholder='Alle' dataKey="parking_count" onChange={(value) => setParkingCount(value)} />

      <h3 className='dropdownTitle'>Prijs</h3>
      <div className="dubblefilter">
        <div>
          <h3 className='subdropdownTitle'>Minimaal</h3>
          <Dropdown placeholder='Alle' dataKey="price" roundBy={100000} roundDirection="down" onChange={(value) => setMinPrice(value)} />
        </div>

        <div>
          <h3 className='subdropdownTitle'>Maximaal</h3>
          <Dropdown placeholder='Alle' dataKey="price" roundBy={100000} roundDirection="up" onChange={(value) => setMaxPrice(value)} />
        </div>


      </div>


      <h3 className='dropdownTitle'>Kaveloppervlakte</h3>
      <div className="dubblefilter">
        <div>
          <h3 className='subdropdownTitle'>Minimaal</h3>
          <Dropdown placeholder='Alle' dataKey="plot_surface" roundBy={10} roundDirection="down" onChange={(value) => setMinPlot_surface(value)} />
        </div>

        <div>
          <h3 className='subdropdownTitle'>Maximaal</h3>
          <Dropdown placeholder='Alle' dataKey="plot_surface" roundBy={10} roundDirection="up" onChange={(value) => setMaxPlot_surface(value)} />
        </div>

      </div>


      
      <div className='in-overlay-button'>
      <button className="search-button" onClick={search}>
        Zoek
      </button>
      <button className="close-overlay-button" onClick={onClose}>
        Sluiten
      </button>
      </div>

    </div>
  );
};

export default FilterOverlay;
