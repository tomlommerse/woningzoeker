import React from 'react'
import '../../styles/button.css';

function button({buttonnaam}) {
  return (
    <section className='button'>
        <p className='buttonnaam'>{buttonnaam}</p>
    </section>
  )
}

export default button;