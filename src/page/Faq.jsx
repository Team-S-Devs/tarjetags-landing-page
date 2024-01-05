import React from "react";
import Typography from "@mui/material/Typography";
import BannerTittleHelp from "../components/Faq/BannerTittleHelp";
import CustomAccordion from "../components/Faq/CustomAccordion.jsx";
import questions from "../utils/questionsData.json";
import "../styles/FAQ/Faq.css";

const Faq = () => {
  const halfLength = Math.ceil(questions.length / 2);
  const firstHalf = questions.slice(0, halfLength);
  const secondHalf = questions.slice(halfLength);

  return (
    <>
      <BannerTittleHelp />
      <div className="center-title">
        <Typography variant="h5" fontWeight="bold">Preguntas Frecuentes</Typography>
      </div>
      <div className="center-container">
        <div className="accordion-column">
          {firstHalf.map((question, index) => (
            <CustomAccordion
              key={index}
              id={question.id}
              ariaControls={question.ariaControls}
              heading={question.heading}
              content={question.content}
            />
          ))}
        </div>
        <div className="accordion-column">
          {secondHalf.map((question, index) => (
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