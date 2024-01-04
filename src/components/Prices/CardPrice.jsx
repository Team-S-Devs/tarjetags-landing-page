import React from "react";
import "../../styles/Prices/CardPrice.css"
import { BsCheckCircleFill } from "react-icons/bs";
import ButtonCardPrice from "./ButtonCardPrice";

const CardPrice = (props) => {
    return(
      <div className="card-price-container">
         
         <h2 className="card-tittle">
            {props.tittle.toUpperCase()}
         </h2>
          <div className="card-price">
            <div className="ribbon left">
            <span>{props.price} {props.currency}</span>
            </div>
          </div>

          <div className="benefits-price">
              <div className="benefit-price">
                <BsCheckCircleFill className="icon"/>
                <h4 className="text-benefit">Beneficio</h4>
              </div>
              <div className="benefit-price">
                <BsCheckCircleFill className="icon"/>
                <h4 className="text-benefit">Beneficio</h4>
              </div>
              <div className="benefit-price">
                <BsCheckCircleFill className="icon"/>
                <h4 className="text-benefit">Lore</h4>
              </div>
              <div className="benefit-price">
                <BsCheckCircleFill className="icon"/>
                <h4 className="text-benefit">Beneficio</h4>
              </div>
          </div>
          <div className="button-container">
            {/*<button className="btn-price">
              <span className="text-button-price">
                 Adquirir
              </span>
            </button>*/}
            <ButtonCardPrice/>
          </div>
      </div>
    );
}

export default CardPrice;