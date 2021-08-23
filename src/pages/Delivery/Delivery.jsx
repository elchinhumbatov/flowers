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
        <div className="title">
          <h3>Delivery</h3>
        </div>
      </div>
    </section>
  )
}

export default Delivery
