import React from "react";
import Typography from "@mui/material/Typography";
import BannerTittleHelp from "../components/Faq/BannerTittleHelp";
import CustomAccordion from "../components/Faq/CustomAccordion.jsx";
import "../styles/FAQ/Faq.css";

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
    {
      id: "panel4a-header",
      ariaControls: "panel4a-content",
      heading: "Aqui viene la pregunta 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel5a-header",
      ariaControls: "panel5a-content",
      heading: "Aqui viene la pregunta 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel6a-header",
      ariaControls: "panel6a-content",
      heading: "Aqui viene la pregunta 6",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel7a-header",
      ariaControls: "panel7a-content",
      heading: "Aqui viene la pregunta 7",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel8a-header",
      ariaControls: "panel8a-content",
      heading: "Aqui viene la pregunta 8",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel9a-header",
      ariaControls: "panel9a-content",
      heading: "Aqui viene la pregunta 9",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel10a-header",
      ariaControls: "panel10a-content",
      heading: "Aqui viene la pregunta 10",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

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