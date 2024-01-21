import React from 'react';
import '../../styles/Prices/CardPrice.css';
import { Button, Typography } from "@mui/material";
import { useState } from 'react';
const ButtonCardPrice = (props) => {

    const width = props.width;
    const height = props.height;

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
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
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
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            background: "linear-gradient(90deg, #733EE8 0%, #DB00FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "capitalize"
            }}> 
            {message}
        </Typography>)}


      
  </Button>);
  
}

export default ButtonCardPrice;