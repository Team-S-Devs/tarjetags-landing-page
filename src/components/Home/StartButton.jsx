import { Button } from "@mui/material";
import React from "react";
import { linkHome} from "../../utils/Links.js";

const StartButton = ({white}) => {

    const navigateToLogin = () => {
        window.location.href = linkHome;

    }
    return (
       <Button variant="contained" onClick={navigateToLogin}
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