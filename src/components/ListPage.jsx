import React, { useState } from 'react';
import HomeCard from './cards/HomeCard';
import FilterButton from './Woningpagina/filter/FilterButton';
import jsonData from '../assets/wonen-in-de-kuil.json'; // Import your JSON file
import FilterHuis from './FilterHuis/FilterHuis';
import FilterPrijs from './FilterHuis/FilterPrijs';
import FilterParkeerplaats from './FilterHuis/FilterParkeerplaats';
import '../styles/FilterHuis.css';

const ListPage = () => {
    const { plots } = jsonData;
    const huizen = plots;
    const [filterTextValue, updateFilterText] = useState('all');
    const [filterPrijsValue, updateFilterPrijs] = useState('alles');
    const [filterParkeerplaats, updateFilterParkeerplaats] = useState('alle');

    function opFilterHuis(filterWaarde) {
        updateFilterText(filterWaarde);
    }

    function opFilterPrijs(filterWaarde) {
        updateFilterPrijs(filterWaarde);
    }

    function opFilterParkeerplaats(filterWaarde) {
        updateFilterParkeerplaats(filterWaarde);
    }

    const filterHuizenLijst = huizen.filter((huis) => {
        const statusFilter =
            filterTextValue === 'verkocht'
                ? huis.status === 'verkocht'
                : filterTextValue === 'beschikbaar'
                ? huis.status === 'te-koop'
                : filterTextValue === 'in-optie'
                ? huis.status === 'in-optie'
                : true;

        const prijsFilter =
            filterPrijsValue === '0-300000'
                ? huis.price >= 0 && huis.price <= 300000
                : filterPrijsValue === '300000-400000'
                ? huis.price > 300000 && huis.price <= 400000
                : filterPrijsValue === '400000-500000'
                ? huis.price > 400000 && huis.price <= 500000
                : filterPrijsValue === '500000-600000'
                ? huis.price > 500000 && huis.price <= 600000
                : filterPrijsValue === '600000+'
                ? huis.price > 600000
                : true;

        const parkeerplaatsFilter =
            filterParkeerplaats === 'met-parkeerplaats'
                ? huis.parking_count > 0
                : filterParkeerplaats === 'zonder-parkeerplaats'
                ? huis.parking_count === 0
                : true;

        return statusFilter && prijsFilter && parkeerplaatsFilter;
    });

    const appartementen = filterHuizenLijst.filter((huis) =>
    ['Appartement', 'Dijkappartement', 'Parkappartement'].includes(huis.type)
  );

  const maisonnettes = filterHuizenLijst.filter((huis) =>
    ['Dijkmaisonnette', 'Maisonnette'].includes(huis.type)
  );

  const specifiekeWoningen = filterHuizenLijst.filter((huis) =>
    ['Drive-in woning', 'Stadswoning', 'Terraswoning', 'Valleiwoning'].includes(
      huis.type
    )
  );

    return (
        <div>
            <FilterHuis filterHuis={opFilterHuis}></FilterHuis>
            <FilterPrijs filterPrijs={opFilterPrijs}></FilterPrijs>
            <FilterParkeerplaats filterParkeerplaats={opFilterParkeerplaats}></FilterParkeerplaats>

            <button className="button-type" onClick={() => opFilterHuis('appartementen')}>Appartementen</button>
            <button className="button-type" onClick={() => opFilterHuis('maisonnettes')}>Maisonnettes</button>
            <button className="button-type" onClick={() => opFilterHuis('specifieke-woningen')}>Specifieke Woningen</button>

            {filterTextValue === 'appartementen' && appartementen.map((huis) => (
            <HomeCard
            key={huis.id}
            home={huis.number}
            price={huis.price}
            type={huis.type}
            parking={huis.parking_count}
            m2={huis.living_surface}
            room_count={huis.room_count}
            status={huis.status}
            />
            ))}
            
            {filterTextValue === 'maisonnettes' && maisonnettes.map((huis) => (
            <HomeCard
            key={huis.id}
            home={huis.number}
            price={huis.price}
            type={huis.type}
            parking={huis.parking_count}
            m2={huis.living_surface}
            room_count={huis.room_count}
            status={huis.status}
            />
            ))}
            
            {filterTextValue === 'specifieke-woningen' && specifiekeWoningen.map((huis) => (
            <HomeCard
            key={huis.id}
            home={huis.number}
            price={huis.price}
            type={huis.type}
            parking={huis.parking_count}
            m2={huis.living_surface}
            room_count={huis.room_count}
            status={huis.status}
            />
            ))}
            
            {filterTextValue === 'all' && filterHuizenLijst.map((huis) => (
            <HomeCard
            key={huis.id}
            home={huis.number}
            price={huis.price}
            type={huis.type}
            parking={huis.parking_count}
            m2={huis.living_surface}
            room_count={huis.room_count}
            status={huis.status}
            />
            ))}
        </div>
    );
};

export default ListPage;

