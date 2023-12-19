import React from 'react';
import HomePage from './components/HomePage';
import TopBar from './components/topbar/TopBar';
import NavBar from './components/navbar/NavBar';
import Detailpage from './components/Woningpagina/detailpage';

function App() {
  return (
    <div className="App">
      <TopBar />
      <HomePage />
      <NavBar />
    </div>
  );
}

export default App;
