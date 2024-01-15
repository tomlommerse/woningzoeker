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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        </main>
    );
}

export default StartPage;
