import React from 'react';
import '../../styles/card.css';
import Test from '../../assets/Test_2.jpg';
import Tags from './tags';

function HomeCard({ home, price, type, parking, m2, room_count }) {
  const parkingTag = `${parking} parkeerplaatsen`;
  const m2Tag = `${m2} m²`;
  const room_countTag = `${room_count} kamers`;

  return (
    <section className='content'>
      <img id='img' src={Test} alt='house' />
      <h3 id='adres'>{home}</h3>
      <h3 id='price'>€{price}</h3>
      <div id='line'></div>
      <div className='taglist'>
        <Tags tagname={type} />
        <Tags tagname={parkingTag} />
        <Tags tagname={m2Tag} />
        <Tags tagname={room_countTag} />
      </div>
    </section>
  );
}

export default HomeCard;
