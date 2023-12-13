import React from 'react'
import '../../styles/card.css';
import Test from '../../assets/test.jpg';
import Tags from './tags';


function HomeCard() {
  return (
    <section className='content'>
        
        <img id='img' src={Test} alt='house'/>
        <h3 id='adres'>adress</h3>
        <h3 id='price'>$100.000</h3>  
        <div id='line'></div>
        <div className='taglist'>
            <Tags tagname={'stadswoning'}/>
            <Tags tagname={'40^2'}/>
            <Tags tagname={'2 kamers'}/>
            <Tags tagname={'1 badkamer'}/>
            <Tags tagname={'3 verdiepingen'}/>
            <Tags tagname={'energielabel A'}/>
        </div>
              
    </section>
  )
}

export default HomeCard