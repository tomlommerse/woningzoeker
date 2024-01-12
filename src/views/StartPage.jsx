// StartPage.jsx
import React, { useState } from 'react';
import '../styles/start.css';
import Dropdown from '../components/homesearch/Dropdown';
import pic from '../assets/startpic.jpg';

function StartPage() {
    const [selectedType, setSelectedType] = useState('');

    const handleSearch = () => {
        console.log('Selected Type:', selectedType);
        // Add your logic here for handling the selected type
    };

    return (
        <main>
            <img id='startpic' src={pic} alt='house' />
            <section className='searchbox'>
            <h2>type huis</h2>
                <Dropdown dataKey="type" onChange={(value) => setSelectedType(value)} />
                <h2>Minimumprijs</h2>
                <Dropdown dataKey="price" roundBy={100000} roundDirection="down" onChange={(value) => setSelectedType(value)} />
                <h2>Maxmumprijs</h2>
                <Dropdown dataKey="price" roundBy={100000} roundDirection="up" onChange={(value) => setSelectedType(value)} />
                <button className='zoekButton' onClick={handleSearch}>
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
