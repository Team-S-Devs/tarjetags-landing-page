import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import "../../styles/Prices/TableCompare.css";

const BoxBenefit = (props) =>{
    const text = props.text;
    const iconType = props.iconType;
    return(
        <div className="box-content">
            <div className="divisor-line"></div>
        {text ? (
          <h4>{text}</h4>
        ) : iconType === 'true' ? (
          <BsCheckCircleFill className="icon-check" />
        ) : (
          <BsXCircleFill className="icon-check-negative" />
        )}
      </div>
    )
}

export default BoxBenefit;