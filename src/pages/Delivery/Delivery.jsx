import React from 'react'
import Roadmap from '../../components/Roadmap/Roadmap';

function Delivery() {
  const delivery = {
    last: "Доставка и оплата",
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className='graybg'>
      <div className="container-outter">
        <Roadmap data={delivery} />
      </div>
      <div className="container">
        <h1>Delivery</h1>
      </div>
    </section>
  )
}

export default Delivery
