import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SvgIcon from "@mui/material/SvgIcon";

import "../styles/FAQ/Faq.css";

const CustomAccordion = ({ id, ariaControls, heading, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
    <div className="custom-accordion">
    <Accordion >
      <AccordionSummary
        expandIcon={<SvgIcon style={{ fontSize: "1.1rem" }} viewBox="0 0 36 20" >
        <foreignObject width="100%" height="100%">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 36 20" fill="none">
            <path d="M2 2L17.884 17.884L33.7679 2" stroke="url(#paint0_linear_1626_2697)" stroke-width="3.97099" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_1626_2697" x1="17.884" y1="2" x2="17.884" y2="17.884" gradientUnits="userSpaceOnUse">
                <stop stop-color="#733EE8"/>
                <stop offset="1" stop-color="#DB00FF"/>
              </linearGradient>
            </defs>
          </svg>
        </foreignObject>
      </SvgIcon>
    }
        aria-controls={ariaControls}
        id={id}
      >
        <Typography className="question-rectangle-date-text">{heading}</Typography>
        {isExpanded ? (
          <Typography>{content}</Typography>
        ) : null}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
    </div>
    </>
  );
};

const Faq = () => {
  const questions = [
    {
      id: "panel1a-header",
      ariaControls: "panel1a-content",
      heading: "Aqui viene la pregunta",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel2a-header",
      ariaControls: "panel2a-content",
      heading: "Aqui viene la pregunta 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel3a-header",
      ariaControls: "panel3a-content",
      heading: "Aqui viene la pregunta 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <>
    <div className="center-title" >
        <Typography>FAQ</Typography>
    </div>
    <div className="center-container">
      <div>
        {questions.map((question, index) => (
          <CustomAccordion
            key={index}
            id={question.id}
            ariaControls={question.ariaControls}
            heading={question.heading}
            content={question.content}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default Faq;