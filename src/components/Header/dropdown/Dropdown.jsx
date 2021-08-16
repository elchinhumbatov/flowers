import React from 'react'

function Dropdown({id}) {
  const cats = [ "Букеты", "Цветы", "Розы", "Пионы", "Сладости", "Композиции", "Кому", ];

  return (
    <div >
      <h1>{cats[id]}</h1>
    </div>
  )
}


export default Dropdown
