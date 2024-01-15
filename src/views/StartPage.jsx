//views/StartPage.jsx
import React, { useState } from 'react';
import '../styles/start.css';
import Dropdown from '../components/homesearch/Dropdown';
import pic from '../assets/startpic.jpg';

function StartPage() {
    const [selectedType, setSelectedType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const search = () => {
        localStorage.setItem('selectedType', selectedType);
        localStorage.setItem('minPrice', minPrice);
        localStorage.setItem('maxPrice', maxPrice);

        console.log('LocalStorage:', localStorage);

        window.location.href = '/Zoek';
    };

    return (
        <main>
            <img id='startpic' src={pic} alt='house' />
            <section className='searchbox'>
                
                <Dropdown className="pageDrop" placeholder='Selecteer woningtype' dataKey="type" onChange={(value) => setSelectedType(value)} />
            
                <Dropdown className="pageDrop" placeholder='Selecteer Minimum prijs' dataKey="price" roundBy={100000} roundDirection="down" onChange={(value) => setMinPrice(value)} />
                
                <Dropdown className="pageDrop" placeholder='Selecteer Maximum prijs' dataKey="price" roundBy={100000} roundDirection="up" onChange={(value) => setMaxPrice(value)} />
                <button className='zoekButton' onClick={search}>
                    Zoek
                </button>
            </section>
            <section className='homeText'>
                <h1>De groene vallei op Zuid</h1>
                <p>
                De Kuil bestaat uit 232 woningen, van fijne appartementen tot flexibele eengezinswoningen, 
                die tussen de Brede Hilledijk, Paul Krugerstraat en de Jacominastraat worden gebouwd. Met een groene oase in het midden, 
                waar je je buren kunt ontmoeten, kunt ontspannen of heerlijk kunt spelen. 
                Met alle voorzieningen dichtbij én binnen 10 minuten in de bruisende binnenstad van Rotterdam. Ideaal wonen toch?
                De bouw van alle fases in volle gang!
                </p>
            </section>
        </main>
    );
}

export default StartPage;
