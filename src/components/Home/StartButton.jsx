import { Button } from "@mui/material";
import React from "react";

const StartButton = () => {
    return (
       <Button variant="contained"
        sx={{
            backgroundColor:"#733EE8", 
            borderRadius:"25px",
            width:"200px",
            height:"50px",
            color:"white",
            fontSize:"20px",
            '&:hover': {
                backgroundColor: "#733EE8",
                }
            }} >
              Comenzar
         </Button>
    );
}

export default StartButton;