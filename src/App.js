import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './components/ListPage';
import TopBar from './components/topbar/TopBar';
import NavBar from './components/navbar/NavBar';
import DetailPage from './components/detailpage';
import MapPage from './components/MapPage';
import StartPage from './views/StartPage';
import PerspectivePage from './components/PerspectivePage';
import PerspectiveRegion23Page from './components/PerspectiveRegion23Page';
import PerspectiveRegion25Page from './components/PerspectiveRegion25Page';
import PerspectiveRegion27Page from './components/PerspectiveRegion27Page';
import PerspectiveRegion155Page from './components/PerspectiveRegion155Page';
import PerspectiveRegion157Page from './components/PerspectiveRegion157Page';
// import Buurt1 from './components/mapRegions/buurt1';
import Buurt2 from './components/mapRegions/buurt2';
// import Buurt3 from './components/mapRegions/buurt3';
// import Buurt4 from './components/mapRegions/buurt4';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path='/' element={  <StartPage />}/>
        <Route path='/home' element={  <StartPage />}/>
        <Route path="/zoek" element={<ListPage />} />
        <Route path="/:home" element={<DetailPage />} />
        <Route path="/kaart" element={<MapPage />} />
        <Route path="/3D" element={<PerspectivePage />} />
        <Route path="/3D/23" element={<PerspectiveRegion23Page />} />
        <Route path="/3D/25" element={<PerspectiveRegion25Page />} />
        <Route path="/3D/27" element={<PerspectiveRegion27Page />} />
        <Route path="/3D/155" element={<PerspectiveRegion155Page />} />
        <Route path="/3D/157" element={<PerspectiveRegion157Page />} />
        {/* <Route path="/buurt1" element={<Buurt1 />}/> */}
        <Route path="/buurt2" element={<Buurt2 />}/>
        {/* <Route path="/buurt3" element={<Buurt3 />}/>
        <Route path="/buurt4" element={<Buurt4 />}/> */}
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
