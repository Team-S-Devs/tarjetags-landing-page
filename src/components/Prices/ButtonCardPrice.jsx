import React from "react";
import "../../styles/Prices/CardPrice.css";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { PHONE_NUMBER, SITE_NAME } from "../../utils/constant";

const ButtonCardPrice = ({ width, height, currentPlanName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const message = "Adquirir";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const obtenerSaludo = () => {
    const horaActual = new Date().getHours();

    if (horaActual >= 5 && horaActual < 12) {
      return "Buenos%20días";
    } else if (horaActual >= 12 && horaActual < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas%20noches";
    }
  };

  const getWppLink = () => {
    return `https://wa.me/591${PHONE_NUMBER}?text=${obtenerSaludo()}.%20Deseo adquirir la Licencia ${currentPlanName} de ${SITE_NAME}.`;
  };

  return (
    <Button
      variant="outlined"
      sx={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
        borderRadius: "100px",
        border: "1px solid #662483",
        background: "rgba(255, 255, 255, 0.00)",
        transition: "opacity 2.5s",

        ":hover": {
          background: "linear-gradient(90deg, #662483 0%, #DB00FF 100%)",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={getWppLink()}
      target="_blank"
    >
      {isHovered ? (
        <Typography
          variant="h5"
          className="text-button-price-card"
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            "text-transform": "capitalize",
          }}
        >
          {message}
        </Typography>
      ) : (
        <Typography
          variant="h5"
          className="text-button-price-card"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            background: "linear-gradient(90deg, #662483 0%, #DB00FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "capitalize",
          }}
        >
          {message}
        </Typography>
      )}
    </Button>
  );
};

export default ButtonCardPrice;
