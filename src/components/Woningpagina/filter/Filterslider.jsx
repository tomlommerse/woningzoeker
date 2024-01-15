import React from 'react';
import ListPageMainFilter from './ListPageMainFilter';
import '../../../styles/filterlistpage.css';

const App = () => {
  const types = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6'];
  const [activeType, setActiveType] = React.useState(types[0]);

  const handleSlider = (direction) => {
    const slider = document.getElementById('filter-slider');
    const scrollAmount = direction === 'left' ? -slider.clientWidth : slider.clientWidth;
    slider.scrollLeft += scrollAmount;
  
    slider.classList.add('active');
  };
  
  return (
    <div className="filter-slider-container">
      <div className="filter-slider" id="filter-slider">
        {types.map((type, index) => (
          <ListPageMainFilter
            key={index}
            type={type}
            isActive={activeType === type}
            onClick={(type) => setActiveType(type)}
          />
        ))}
      </div>
      <button onClick={() => handleSlider('left')}>Swipe Left</button>
<button onClick={() => handleSlider('right')}>Swipe Right</button>
    </div>
  );
};

export default App;