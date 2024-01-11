import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaPlus, FaMinus } from 'react-icons/fa6';
import "../../styles/FAQ/Faq.css";

const CustomAccordion = ({ id, ariaControls, heading, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="custom-accordion">
      <Accordion expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
        <AccordionSummary
          expandIcon={isExpanded ? <FaMinus /> : <FaPlus />}
          aria-controls={ariaControls}
          id={id}
        >
          <Typography className={`question-rectangle-date-text${isExpanded ? ' expanded' : ''}`} variant="h6">
            {heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;