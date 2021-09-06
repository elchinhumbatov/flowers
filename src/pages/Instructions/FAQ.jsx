import React from "react";
import s from "./Instructions.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector } from "react-redux";

function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const faqQuestions = useSelector(
    (state) => state.instructionsPage.faqQuestions
  );

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={s.root}>
      {faqQuestions.map((question) => {
        return (
          <Accordion
            expanded={expanded === `panel${question.id}a`}
            onChange={handleChange(`panel${question.id}a`)}
            key={question.id}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${question.id}a` ? (
                  <RemoveIcon />
                ) : (
                  <AddIcon />
                )
              }
              aria-controls={`panel${question.id}a-content`}
              id={`panel${question.id}a-header`}
            >
              <Typography className={s.heading}>{question.title} - {question.id}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.text}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default FAQ;
