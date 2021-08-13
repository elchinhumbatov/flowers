import React from 'react'

function Dropdown({id}) {
  const subcat = [ "Букеты", "Цветы", "Розы", "Пионы", "Сладости", "Композиции", "Кому", ];

  return (
    <div >
      <h1>{subcat[id]}</h1>
    </div>
  )
}


export default Dropdown
