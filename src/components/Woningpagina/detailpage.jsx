import React from 'react'
import Button from './button';

import Test1 from '../../assets/Test_2.jpg';
import Test2 from '../../assets/Test_3.jpg';
import Test3 from '../../assets/Test_4.jpg';
import Test4 from '../../assets/Test_5.jpg';
import Test5 from '../../assets/Test_6.jpg';
import ImageSlider from './ImageSlider.tsx';

const FOTOS = [Test1, Test2, Test3, Test4, Test5]


function detailpage() {
  return (
    <section>
        <ImageSlider imageUrls={FOTOS}/>
        <section className='detailcontent'>
        <Button className='button1' buttonnaam={'Inschrijven'}/>
        <Button className='button2' buttonnaam={'Brochure'}/>
        
        </section>
    </section>

  )
}

export default detailpage