import React, { useState } from 'react';
import HomeCard from './cards/HomeCard';
import FilterHuis from './FilterHuis/FilterHuis';
import FilterPrijs from './FilterHuis/FilterPrijs';
import FilterParkeerplaats from './FilterHuis/FilterParkeerplaats';
import jsonData from '../assets/wonen-in-de-kuil.json';

const HomePage = () => {
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
            filterPrijsValue === '0-100000'
                ? huis.price >= 0 && huis.price <= 100000
                : filterPrijsValue === '100000-200000'
                ? huis.price > 100000 && huis.price <= 200000
                : filterPrijsValue === '200000-300000'
                ? huis.price > 200000 && huis.price <= 300000
                : filterPrijsValue === '300000-400000'
                ? huis.price > 300000 && huis.price <= 400000
                : filterPrijsValue === '500000+'
                ? huis.price > 500000
                : true;

        const parkeerplaatsFilter =
            filterParkeerplaats === 'met-parkeerplaats'
                ? huis.parking_count > 0
                : filterParkeerplaats === 'zonder-parkeerplaats'
                ? huis.parking_count === 0
                : true;

        return statusFilter && prijsFilter && parkeerplaatsFilter;
    });

    return (
        <main>
            <FilterHuis filterHuis={opFilterHuis}></FilterHuis>
            <FilterPrijs filterPrijs={opFilterPrijs}></FilterPrijs>
            <FilterParkeerplaats
                filterParkeerplaats={opFilterParkeerplaats}
            ></FilterParkeerplaats>
            {filterHuizenLijst.map((huis) => (
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
        </main>
    );
};

export default HomePage;

