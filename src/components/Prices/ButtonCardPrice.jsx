import React from 'react';
import '../../styles/Prices/CardPrice.css';
import { Button, Typography } from "@mui/material";
import { useState } from 'react';
const ButtonCardPrice = () => {

    const [isHovered, setIsHovered] = useState(false);
    const message = "Adquirir"

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (  
     <Button variant="outlined" 
        sx={{
        width: "100%",
        height: "48px",
        borderRadius: "100px",
        border: "1px solid #733EE8",
        background: "rgba(255, 255, 255, 0.00)",
        transition: "opacity 2.5s",

        ":hover":{
            background: "linear-gradient(90deg, #733EE8 0%, #DB00FF 100%)",
        },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
        >

        {isHovered?
         (
           <Typography variant="h5" className="text-button-price-card"
           sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            "text-transform": "capitalize",
           }}>
            {message}
           </Typography> 
         ) : 
         ( 
         <Typography variant="h5" className="text-button-price-card"
            sx={{
            "text-align": "center",
            "font-family": "Poppins",
            "font-size": "32px",
            "font-style": "normal",
            "font-weight": 400,
            "line-height": "normal",
            background: "linear-gradient(90deg, #733EE8 0%, #DB00FF 100%)",
            "background-clip": "text",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "text-transform": "capitalize"
            }}> 
            {message}
        </Typography>)}


      
  </Button>);
  
}

export default ButtonCardPrice;