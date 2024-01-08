import React, { useState } from 'react'
import '../styles/start.css';
import Search from '../components/homesearch/SearchBar'
import pic from '../assets/startpic.jpg';

const minPrice = [
    {key: 1, value: "0" },
    {key: 2, value: "200.000" },
    {key: 3, value: "300.000" },
    {key: 4, value: "400.000" },
    {key: 5, value: "500.000" },
    {key: 6, value: "600.000" }
];

const maxPrice = [
    {key: 1, value: "Geen maximum" },
    {key: 2, value: "200.000" },
    {key: 3, value: "300.000" },
    {key: 4, value: "400.000" },
    {key: 5, value: "500.000" },
    {key: 6, value: "600.000+" }
];

const space = [
    {key: 1, value: "Test 1" },
    {key: 2, value: "Test 2" },
    {key: 3, value: "Test 3" },
    {key: 4, value: "Test 4" }
];

function StartPage() {
    const [selectedOption, setSelectedOption] = useState("");
    const [open, setOpen] = useState(false);


  return (
    <main>
        <img id='startpic' src={pic} alt='house' />
        <section className='searchbox'>
            <Search
                options={minPrice}
                onChange={(item) => setSelectedOption(item)}
                selectedKey={selectedOption}
                placeholder={"Van        €0"}
                open={open}
                setOpen={setOpen}
            />
            <Search
                options={maxPrice}
                onChange={(item) => setSelectedOption(item)}
                selectedKey={selectedOption}
                placeholder={"Tot        Geen maximum"}
                open={open}
                setOpen={setOpen}
            />
            <Search
                options={space}
                onChange={(item) => setSelectedOption(item)}
                selectedKey={selectedOption}
                placeholder={"Opp      Geen grootte"}
                open={open}
                setOpen={setOpen}
            />
            <button className='zoekButton'>Zoek</button>
            {/*<p>selected option: {selectedOption}</p>*/}
        </section>
        <section className='homeText'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    </main>
    
  )
}

export default StartPage