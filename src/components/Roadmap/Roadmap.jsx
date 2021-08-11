import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import './Roadmap.css';

function Roadmap() {
  return (
    <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
      <Link color="inherit" to="/">
        Flower place
      </Link>
      <Typography color="textPrimary">Магазины</Typography>
    </Breadcrumbs>
  )
}

export default Roadmap
