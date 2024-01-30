import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card.css';
import Tags from './tags';
// import Test from '../../assets/houseImages/Appartement.jpg';
import AppartementImage from '../../assets/houseImages/Appartement.jpg';
import DijkappartementImage from '../../assets/houseImages/Dijkappartement.jpg';
import DijkmaisonnetteImage from '../../assets/houseImages/Dijkmaisonnette.jpg';
import DriveInWoningImage from '../../assets/houseImages/Drive-in woning.jpg';
import MaisonnetteImage from '../../assets/houseImages/Maisonnette.jpg';
import ParkappartementImage from '../../assets/houseImages/Parkappartement.jpg';
import ParkmaisonnetteImage from '../../assets/houseImages/Parkmaisonnette.jpg';
import StadswoningImage from '../../assets/houseImages/Stadswoning.jpg';
import TerraswoningImage from '../../assets/houseImages/Terraswoning.jpg';
import ValleiwoningImage from '../../assets/houseImages/Valleiwoning.jpg';
import ParkeerplaatsImage from '../../assets/houseImages/Parkeerplaats.jpg';

function HomeCard({ home, price, type, parking, m2, room_count, status }) {
  const parkingTag = `${parking} parkeerplaatsen`;
  const m2Tag = `${m2} m²`;
  const room_countTag = `${room_count} kamers`;
  const statusTag = `${status}`;
  const priceColor = status === 'verkocht' ? '#FF0000' : status === 'in-optie' ? '#FFA500' : '#04B900';

  const imageMap = {
    'Appartement': AppartementImage,
    'Dijkappartement': DijkappartementImage,
    'Dijkmaisonnette': DijkmaisonnetteImage,
    'Drive-in woning': DriveInWoningImage,
    'Maisonnette': MaisonnetteImage,
    'Parkappartement': ParkappartementImage,
    'Parkmaisonnette': ParkmaisonnetteImage,
    'Stadswoning': StadswoningImage,
    'Terraswoning': TerraswoningImage,
    'Valleiwoning': ValleiwoningImage,
    'Parkeerplaats': ParkeerplaatsImage,
  };

  const imageSrc = imageMap[type];
  
  return (
      <Link className='homeCard' to={`/${home}`}>
        <div className="imgArea">
          <img id='img' src={imageSrc} alt={type} />
          <p id='adres'>{home}</p>
          <p id='price' style={{ backgroundColor: priceColor }}>
  €{price}
</p>
        </div>
        <div className='tagList'>
          <Tags tagname={type} />
          <Tags tagname={parkingTag} />
          <Tags tagname={m2Tag} />
          <Tags tagname={room_countTag} />
          <Tags tagname={statusTag} />
        </div>
      </Link>
  );
}

export default HomeCard;
