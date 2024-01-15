import React, { useState } from 'react';
import '../styles/FilterOverlay.css';

const FilterOverlay = ({ onFilterChange }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [roomFilter, setRoomFilter] = useState(null);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleRoomFilterChange = (event) => {
    setRoomFilter(event.target.value);
  };

  const applyFilters = () => {
    onFilterChange(roomFilter);
    toggleOverlay(); // Close the overlay after applying filters
  };

  return (
    <div>
      <button
      className="open-overlay-button"
      onClick={toggleOverlay}
      style={{ display: isOverlayVisible ? 'none' : 'block' }}>
        Open Filter
      </button>

      {isOverlayVisible && (
        <div className="filter-overlay">
          <button className="close-overlay-button" onClick={toggleOverlay}>
            Sluit Filter
          </button>

      
          <div>
            <label htmlFor="filterOptie1">Filter Optie 1:</label>
            <input type="text" id="filterOptie1" />
          </div>

          <div>
            <label htmlFor="roomFilter">Aantal Kamers:</label>
            <select id="roomFilter" onChange={handleRoomFilterChange}>
              <option value="">Alle Kamers</option>
              <option value="2">2 Kamers</option>
              <option value="3">3 Kamers</option>
              <option value="4">4 Kamers</option>
              <option value="5+">5+ Kamers</option>
            </select>
          </div>
          <button onClick={applyFilters}>Filter Toepassen</button>

          
        </div>
      )}
    </div>
  );
};

export default FilterOverlay;