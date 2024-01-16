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


  return (
    <div className="filter-overlay">
      <h2 className='overlaytekst'>Filter Options</h2>

      <h3 className='overlaytekst'>Type huis</h3>
      <Dropdown dataKey="type" onChange={(value) => setSelectedType(value)} />

      <h3 className='overlaytekst'>Aantal parkeerplaatsen</h3>
      <Dropdown dataKey="parking_count" onChange={(value) => setParkingCount(value)} />

      <h3 className='overlaytekst'>Minimumprijs</h3>
      <Dropdown dataKey="price" roundBy={100000} roundDirection="down" onChange={(value) => setMinPrice(value)} />

      <h3 className='overlaytekst'>Maxmumprijs</h3>
      <Dropdown dataKey="price" roundBy={100000} roundDirection="up" onChange={(value) => setMaxPrice(value)} />

      <h3 className='overlaytekst'>MinKaveloppervlakte</h3>
      <Dropdown dataKey="plot_surface" roundBy={10} roundDirection="down" onChange={(value) => setMinPlot_surface(value)} />

      <h3 className='overlaytekst'>MaxKaveloppervlakte</h3>
      <Dropdown dataKey="plot_surface" roundBy={10} roundDirection="up" onChange={(value) => setMaxPlot_surface(value)} />

      <section className='buttongridoverlay'>
        <button className="close-overlay-button" onClick={search}>
          <h2>Zoek</h2>
          </button>
          <button className="close-overlay-button" onClick={onClose}>
            <h2>Sluit</h2>
          </button>
      </section>
    </div>
  );
};

export default FilterOverlay;
