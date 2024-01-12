import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import "../../styles/Prices/TableCompare.css";
import { LinkedinIcon, TikTokIcon, WhatsappIcon, LocationIcon} from "../../utils/Icons";

const BoxBenefit = (props) =>{
    const text = props.text;
    const iconType = props.iconType;
    const listButtons = props.listButtons;

    const getIconOfButton = (nameButton) => {
       console.log(nameButton, ' :nameButton');
        if(nameButton === "Whatsapp"){
          return (<WhatsappIcon/>);
        }else if( nameButton === "TikTok"){
          return(<TikTokIcon/>);
        }else if (nameButton === "Linkedin"){
          return(<LinkedinIcon/>);
        }else if (nameButton === "Maps"){
          return(<LocationIcon/>);
        } else if(nameButton === "Ninguno"){
          return <h4>Ninguno</h4>;
        } else if(nameButton === "Ilimitado"){
          return <h4>Todos</h4>;
        }else{
          console.log('No se encontro el icono');
          return null;
        }
    }

    const blockButtons = () => {
      console.log(listButtons, ' :listButtons');
      return (
        <div className="icons-container">
         {listButtons.map((element, index) => (
          getIconOfButton(element)
        ))}
        </div>
      );
    }

    
    return (
      <div className="box-content">
        <div className="divisor-line divisior-line-column-price"></div>
        <div className="divisor-line-vertical"></div>
        {text ? (
          <h4>{text}</h4>
        ) : listButtons ? (
          blockButtons()
        ) : iconType === true ? (
          <BsCheckCircleFill className="icon-check" />
        ) : (
          <BsXCircleFill className="icon-check-negative" />
        )}
      </div>
    );
}

export default BoxBenefit;