import React, { useState, useEffect } from 'react';
import Button from './Woningpagina/button.jsx';
import Test1 from '../assets/Test_2.jpg';
import Test2 from '../assets/Test_3.jpg';
import Test3 from '../assets/Test_4.jpg';
import Test4 from '../assets/Test_5.jpg';
import Test5 from '../assets/Test_6.jpg';
import { useParams } from 'react-router-dom';
import "../styles/detail.css" 
import ImageSlider from './Woningpagina/ImageSlider.tsx';
import jsonData from '../assets/wonen-in-de-kuil.json';
import '../styles/button.css';

const FOTOS = [Test1, Test2, Test3, Test4, Test5]



function Detailpage() {
  const [accessibility, setAccessibility] = useState('');


  useEffect(() => {
    const accessibility_on = localStorage.getItem('accessibility');

    setAccessibility(accessibility_on);
    console.log(accessibility)
    accessibility_check();

}, [accessibility]);

const accessibility_check = () => {
  console.log("accessibility: ",accessibility)
  if (accessibility === "true") {
      console.log("accessibility_check is ON")
      //  document.getElementById("filterButton").style.fontSize = "25px";
       document.getElementById("info").setAttribute("class", "info_Fixed");
       document.getElementById("omschrijving").setAttribute("class", "omschrijving_Fixed");
       document.getElementById("kenmerken").setAttribute("class", "kenmerken_Fixed");
       document.getElementById("detailcontent").setAttribute("class", "detailcontent_Fixed")
  } else{
      console.log("accessibility_check is OFF")
  }
 
}

  const { home } = useParams();
  const plot = jsonData.plots.find((p) => p.number === home);
  if (!plot) {
    return <div>{home}</div>;
  }
  return (
    <section style={{paddingTop: 60}}>
        <div style={{ maxWidth: "1200px", width: "100%", height: "270px", margin: "0 auto"}}>
      <ImageSlider imageUrls={FOTOS}/>
      </div>
      <section id='detailcontent'>
      <Button buttonnaam={'Inschrijven'}/>
      <Button buttonnaam={'Brochure'}/>
      
      </section>
    
      <section id='info'>
        <section className='specs'>
          <section>
            <h1>Huis:{plot.number}</h1>
           <h1>Opp: {plot.living_surface}m2</h1>
           <h1>{plot.room_count} kamers</h1>
          </section>
           
            <section className='prijs'>
              <h1>€{plot.price} euro</h1>
            </section>
        </section>
        
        
        <section id='omschrijving'>
           <h1>Omschrijving</h1>
           <p>Deze gezellige {plot.type} woning 
              is nu te koop vanaf €{plot.price} euro
              en is inclusief een garage en achtertuin.
              De woning telt {plot.living_surface} m2 aan oppervlakte waarvan {plot.plot_surface} m2 aan huisoppervlakte</p>
        </section>

        <section id='kenmerken'>
          <h1>Kenmerken</h1>
          <p>Status: {plot.status}</p>
          <p>Vraagprijs per m2: €{Math.round(plot.price / plot.living_surface)}</p>

        </section>
    </section>
    </section>
  )
}


export default Detailpage

