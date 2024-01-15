import React from 'react'
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

const FOTOS = [Test1, Test2, Test3, Test4, Test5]



function Detailpage() {
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
      <section className='detailcontent'>
      <Button buttonnaam={'Inschrijven'}/>
      <Button buttonnaam={'Brochure'}/>
      
      </section>
    
      <section className='info'>
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
        
        
        <section className='omschrijving'>
           <h1>Omschrijving</h1>
           <p>Deze gezellige {plot.type} woning 
              is nu te koop vanaf €{plot.price} euro
              en is inclusief een garage en achtertuin.
              De woning telt {plot.bedrooms} slaapkamers, een 
              woonkamer en een keuken. Ook is er
              een badkamer en een extra toilet </p>
        </section>

        <section className='kenmerken'>
          <h1>Kenmerken</h1>
          <p>Status: {plot.status}</p>
          <p>Vraagprijs per m2: €{Math.round(plot.price / plot.living_surface)}</p>

        </section>
    </section>
    </section>
  )
}


export default Detailpage

