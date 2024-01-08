import React from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from './Woningpagina/ImageSlider.tsx';
import Button from './Woningpagina/button.jsx';
import jsonData from '../assets/wonen-in-de-kuil.json';

const DetailPage = () => {
  const { home } = useParams();
  const plot = jsonData.plots.find((p) => p.number === home);

  if (!plot) {
    return <div>{home}</div>;
  }

  return (
    <section>
      {/* <div style={{ maxWidth: "1200px", width: "100%", height: "300px", margin: "0 auto"}}>
        <ImageSlider imageUrls={plot.imageUrls} />
      </div> */}
      <section className='detailcontent'>
        <Button buttonnaam={'Inschrijven'}/>
        <Button buttonnaam={'Brochure'}/>


        <p>{plot.number}</p>
        <p>{plot.price}</p>
        <p>{plot.type}</p>


      </section>
    </section>
  );
}

export default DetailPage;
