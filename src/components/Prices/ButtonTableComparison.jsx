import React from "react";
import { Box, Button } from '@mui/material';
import "../../styles/Prices/ButtonTableCompare.css";
import "../../styles/Prices/CarouselButtons.css";


const ButtonTableComparison = (props) => {
   
    return (
        <>
        <div className='button-carousel'>
               <div className="text-button-table-compare">
                    <h3 className="title-button">{props.title}</h3>
                    <div className='text-container-price'>
                        <h2 className='text-price-table'>{props.currency} {props.amount}</h2>
                    </div>
                </div>
        </div>
        </>
    );
    }

export default ButtonTableComparison;