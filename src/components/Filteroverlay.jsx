import React, { useState } from 'react';
import '../styles/FilterOverlay.css';

const FilterOverlay = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div>
      <button className="open-overlay-button" onClick={toggleOverlay}>
        Open Filter
      </button>

      {isOverlayVisible && (
        <div className="filter-overlay">
          <button className="close-overlay-button" onClick={toggleOverlay}>
            Sluit Filter
          </button>

          {/* Voeg hier je filteropties toe */}
          <div>
            <label htmlFor="filterOptie1">Filter Optie 1:</label>
            <input type="text" id="filterOptie1" />
          </div>

          <div>
            <label htmlFor="filterOptie2">Filter Optie 2:</label>
            <input type="text" id="filterOptie2" />
          </div>

          {/* Voeg extra filters toe indien nodig */}
        </div>
      )}
    </div>
  );
};

export default FilterOverlay;