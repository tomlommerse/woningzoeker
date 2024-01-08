import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopBar from './components/topbar/TopBar';
import NavBar from './components/navbar/NavBar';
import DetailPage from './components/detailpage';
import MapPage from './components/MapPage';
import StartPage from './views/StartPage';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/:home" element={<DetailPage />} />
        <Route path="/kaart" element={<MapPage />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
