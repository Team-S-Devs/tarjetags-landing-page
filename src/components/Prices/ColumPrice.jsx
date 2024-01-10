import React from "react";
import "../../styles/Prices/TableCompare.css";
import BoxBenefit from "./BoxBenefit";
import BoxTitle from "./BoxTitle";

const ColumPrice = ({title, currency, amount }) => {
  const display = true;

  return display ? (
    <div className={`column-price`}>
      <BoxTitle title={title} currency={currency} amount={amount}/>
      
      <BoxBenefit iconType='false'/>
      <BoxBenefit text={title}/>
    </div>
  ) : null;
}

export default ColumPrice;