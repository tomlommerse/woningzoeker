import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card.css';
import Test from '../../assets/Test_2.jpg';
import Tags from './tags';

function HomeCard({ home, price, type, parking, m2, room_count }) {
  const parkingTag = `${parking} parkeerplaatsen`;
  const m2Tag = `${m2} m²`;
  const room_countTag = `${room_count} kamers`;

  return (
      <Link className='homeCard' to="/detailpage">
        <div className="imgArea">
          <img id='img' src={Test} alt='house' />
          <p id='adres'>{home}</p>
          <p id='price'>€{price}</p>
        </div>
        <div className='tagList'>
          <Tags tagname={type} />
          <Tags tagname={parkingTag} />
          <Tags tagname={m2Tag} />
          <Tags tagname={room_countTag} />
        </div>
      </Link>
  );
}

export default HomeCard;
