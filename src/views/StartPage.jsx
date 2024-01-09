import React from 'react'
import '../styles/start.css';
import Dropdown from '../components/homesearch/Dropdown'
import pic from '../assets/startpic.jpg';

function StartPage() {
    const type = ['Masionette', 'Stadwoning'];
    const min = ['0', '200000', '30000'];
    const max = ['200000', '300000', '400000'];

    return (
    <main>
        <img id='startpic' src={pic} alt='house' />
        <section className='searchbox'>

        <h2>woningtype</h2>
        <Dropdown options={type} />

        <h2>min prijs</h2>
        <Dropdown options={min} />

        <h2>max prijs</h2>
        <Dropdown options={max} />

            <button className='zoekButton'>Zoek</button>
            
        </section>
        <section className='homeText'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    </main>

    )
}

export default StartPage