import React from 'react';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import HomeCard from './components/cards/HomeCard';

function App() {
  return (
    <div className="App">
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
    </div>
  );
}

export default App;
