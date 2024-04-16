import { Button } from "@mui/material";
import React from "react";
import { linkHome } from "../../utils/Links.js";
import { useState, useEffect } from "react";

const StartButton = ({ white }) => {
  /* TODO: Aqui ira la logica de obtener el booleano de logueado o no */
  const [isLogged, setIsLogged] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isLogged) {
      setMessage("Mi dashboard");
    } else {
      setMessage("Comenzar");
    }
  }, [isLogged]);

  const navigateToLogin = () => {
    window.location.href = linkHome;
  };
  return (
    <Button
      variant="contained"
      onClick={navigateToLogin}
      sx={{
        backgroundColor: white ? "white" : "#662483",
        borderRadius: "25px",
        width: "200px",
        height: "50px",
        color: white ? "#662483" : "white",
        fontSize: "20px",
        "&:hover": {
          backgroundColor: white ? "white" : "#662483",
        },
      }}
    >
      {message}
    </Button>
  );
};

export default StartButton;
