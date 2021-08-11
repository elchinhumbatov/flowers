import React from 'react'
import './Footer.css';
import Group1 from './group1/Group1';
import Group2 from './group2/Group2';
import Group3 from './group3/Group3';
import Group4 from './group4/Group4';

function Footer() {
  return (
    <footer>
      <div className="container">
        <Group1 />
        <Group2 />
        <Group3 />
        <Group4 />
      </div>
    </footer>
  )
}

export default Footer
