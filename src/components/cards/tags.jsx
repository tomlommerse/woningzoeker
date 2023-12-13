import React from 'react'
import '../../styles/card.css';

function tags({tagname}) {
  return (
    <section className='tag'>
        <p className='tagname'>{tagname}</p>
    </section>
  )
}

export default tags