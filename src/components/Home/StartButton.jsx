import { Button } from "@mui/material";
import React from "react";

const StartButton = ({white}) => {
    return (
       <Button variant="contained"
        sx={{
            backgroundColor: white? ("white") : "#733EE8", 
            borderRadius:"25px",
            width:"200px",
            height:"50px",
            color: white? ("#733EE8") : "white",
            fontSize:"20px",
            '&:hover': {
                backgroundColor: white? "white": "#733EE8",
                }
            }} >
              Comenzar
         </Button>
    );
}

export default StartButton;