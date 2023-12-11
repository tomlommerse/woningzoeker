import React from 'react';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import NavBar from './components/navbar/NavBar';

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
