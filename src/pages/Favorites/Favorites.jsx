import React from 'react'
import Roadmap from '../../components/Roadmap/Roadmap';

function Favorites() {
  const favorites = {
    last: "Вам понравилось",
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section>
      <div className="container-outter graybg">
        <Roadmap data={favorites} />
        <h3>Вам понравилось</h3>
      </div>
      <div className="container">
        sdsf
      </div>
    </section>
  )
}

export default Favorites
