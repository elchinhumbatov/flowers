import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dropdown from './dropdown/Dropdown';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Accardion({cats, subcats, handleCloseDrawer}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {
        cats.map((cat, idx) => {
          return (
            <Accordion key={cat} expanded={expanded === `panel${idx+1}`} onChange={handleChange(`panel${idx+1}`)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${idx+1}a-content`}
                id={`panel${idx+1}a-header`}
              >
                <Typography className={classes.heading}> ustu{cat}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Dropdown subcat={subcats[idx]} displayOpt={'block'} handleCloseDrawer={handleCloseDrawer} />
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </div>
  );
}

export default Accardion

