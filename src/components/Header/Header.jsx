import React from 'react';
import './Header.css';
import Top from './top/Top';
import Middle from './middle/Middle';
import Bottom from './bottom/Bottom';

function Header() {
  return (
    <header className='graybg'>
      <div className="header-top">
        <div className="container-outter">
          <Top />
        </div>
      </div>
      <div className="header-middle">
        <div className="container-outter">
          <Middle />
        </div>
      </div>
      <div className="header-bottom">
        <div className="container-outter">
          <Bottom />
        </div>
      </div>
    </header>
  )
}

export default Header
