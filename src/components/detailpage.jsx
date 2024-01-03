import React from 'react'
import Button from './Woningpagina/button.jsx';

import Test1 from '../assets/Test_2.jpg';
import Test2 from '../assets/Test_3.jpg';
import Test3 from '../assets/Test_4.jpg';
import Test4 from '../assets/Test_5.jpg';
import Test5 from '../assets/Test_6.jpg';
import ImageSlider from './Woningpagina/ImageSlider.tsx';

const FOTOS = [Test1, Test2, Test3, Test4, Test5]


function detailpage({ home, price, type, parking, m2, room_count }) {
  const parkingTag = `${parking} parkeerplaatsen`;
  const m2Tag = `${m2} m²`;
  const room_countTag = `${room_count} kamers`;
  return (
    <section>
      <div style={{ maxWidth: "1200px", width: "100%", height: "300px", margin: "0 auto"}}>
      <ImageSlider imageUrls={FOTOS}/>
      </div>
      <section className='detailcontent'>
      <Button buttonnaam={'Inschrijven'}/>
      <Button buttonnaam={'Brochure'}/>
      </section>
      {/* <h3>{home}</h3>
      <h3>Opp: {m2Tag}</h3>
      <h3>€{price}</h3>
      <p>
        Deze gezellige {type}
        woning is nu te koop vanaf {price} euro
        en is inclusief {parkingTag}.
        De woning telt {room_countTag}. Het huis is te vinden op {home}
        </p> */}

    </section>
      

  )
}

export default detailpage