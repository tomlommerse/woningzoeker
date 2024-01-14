import React from 'react'
import Button from './Woningpagina/button.jsx';
import Test1 from '../assets/Test_2.jpg';
import Test2 from '../assets/Test_3.jpg';
import Test3 from '../assets/Test_4.jpg';
import Test4 from '../assets/Test_5.jpg';
import Test5 from '../assets/Test_6.jpg';
import { useParams } from 'react-router-dom';
import ImageSlider from './Woningpagina/ImageSlider.tsx';
import jsonData from '../assets/wonen-in-de-kuil.json';

const FOTOS = [Test1, Test2, Test3, Test4, Test5]



function Detailpage() {
  console.log('bereikt')
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
    
      <section>
        <p>{plot.number}</p>
        <p>{plot.price}</p>
        <p>{plot.type}</p>
    </section>
    </section>
  )
}


export default Detailpage

