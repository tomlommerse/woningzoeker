//views/StartPage.jsx
import React, { useState, useEffect } from 'react';
import '../styles/start.css';
import Dropdown from '../components/homesearch/Dropdown';
import pic from '../assets/startpic.jpg';
import { useNavigate } from 'react-router-dom';

function StartPage() {
    const [selectedType, setSelectedType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [accessibility, setAccessibility] = useState(true);
    const navigate = useNavigate();

    const search = () => {
        localStorage.setItem('selectedType', selectedType);
        localStorage.setItem('minPrice', minPrice);
        localStorage.setItem('maxPrice', maxPrice);

        console.log('LocalStorage:', localStorage);

        navigate("/Zoek");
    };

    const css_Change = () => {
        if (accessibility === false) {
            setAccessibility(true);
            localStorage.setItem('accessibility', accessibility);
            console.log(accessibility)
        } else {
            setAccessibility(false);
            localStorage.setItem('accessibility', accessibility);
            console.log(accessibility);
        }
        

        if (accessibility === true) {
            console.log("accessibility_check is ON")
             document.getElementById("zoekButton").style.width= "80vw"
             document.getElementById("zoekButton").style.height= "25vw"
             document.getElementById("zoekButton").style.fontSize= "12vw"
             document.getElementById("homeText").style.fontSize= "26px"
             document.getElementById("searchbox").setAttribute("class", "searchbox_Fixed")
             document.documentElement.style.setProperty('--color-primary', '#161616');
             document.documentElement.style.setProperty('--color-secondary', '#656565');
             document.documentElement.style.setProperty('--color-tertiary', '#777777');
             document.documentElement.style.setProperty('--color-tertiary-dark', '#5C5C5C');
             document.documentElement.style.setProperty('--color-white', '#F0F0F0');
             document.documentElement.style.setProperty('--color-orange', '#757575');
        } else{
            console.log("accessibility_check is OFF")
            document.getElementById("zoekButton").style.width= "209px"
            document.getElementById("zoekButton").style.height= "45px"
            document.getElementById("zoekButton").style.fontSize= "23px"
            document.getElementById("homeText").style.fontSize= "18px"
            document.getElementById("searchbox").setAttribute("class", "searchbox")
             document.documentElement.style.setProperty('--color-primary', '#08192F');
             document.documentElement.style.setProperty('--color-secondary', '#007bff');
             document.documentElement.style.setProperty('--color-tertiary', '#706EBC');
             document.documentElement.style.setProperty('--color-tertiary-dark', '#55529e');
             document.documentElement.style.setProperty('--color-white', '#EDF2EF');
             document.documentElement.style.setProperty('--color-orange', '#FF4500');
        }
        
        
    }

    return (
        <main>
            <img id='startpic' src={pic} alt='house' />
            <section id='searchbox'>

            <div className='searchboxContainer'>
                <Dropdown className="pageDrop" placeholder='Woningtype' dataKey="type" onChange={(value) => setSelectedType(value)} />
                
                <Dropdown className="pageDrop" placeholder='Minimum Prijs' dataKey="price" roundBy={100000} roundDirection="down" onChange={(value) => setMinPrice(value)} />
                
                <Dropdown className="pageDrop" placeholder='Maximum Prijs' dataKey="price" roundBy={100000} roundDirection="up" onChange={(value) => setMaxPrice(value)} />
                <button id='zoekButton' onClick={search}>
                    Zoek
                </button>
            </div>
                

            </section>
            <section id='homeText'>
                <h1>De groene vallei op Zuid</h1>
                <p>
                De Kuil bestaat uit 232 woningen, van fijne appartementen tot flexibele eengezinswoningen, 
                die tussen de Brede Hilledijk, Paul Krugerstraat en de Jacominastraat worden gebouwd. Met een groene oase in het midden, 
                waar je je buren kunt ontmoeten, kunt ontspannen of heerlijk kunt spelen. 
                Met alle voorzieningen dichtbij én binnen 10 minuten in de bruisende binnenstad van Rotterdam. Ideaal wonen toch?
                De bouw van alle fases in volle gang!
                </p>
            </section>

            <button onClick={css_Change} id='buttonA' className="filter_button accessibility_button">
                <img className="filterbuttonimg" alt='filter' src="./img/icon/accessibility.svg"/>
            </button>
        </main>
    );
}

export default StartPage;
