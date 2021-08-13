import React from 'react'
import './MainCards.css';
import Card from '../../../components/Card/Card';



function MainCards({data, margin, title}) {
  return (
    <section className='graybg cardsWrap'>
     <div className="container">
       {title ? <div className="cardTitle">
       <h3>{title}</h3>
       </div> : null}
       <div className="cards" style={{marginTop: margin}}>
         {
           data.map((card, idx) => {
             return <Card key={idx} card={card} />
           })
         }
       </div>
     </div>
    </section>
  )
}

export default MainCards
