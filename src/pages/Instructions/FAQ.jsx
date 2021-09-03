import React from "react";
import s from "./Instructions.module.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={s.root}>
      <Accordion
        expanded={expanded === "panel1a"}
        onChange={handleChange("panel1a")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel1a" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={s.heading}>Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2a"}
        onChange={handleChange("panel2a")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel2a" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={s.heading}>Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3a"}
        onChange={handleChange("panel3a")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel3a" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={s.heading}>Question 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
