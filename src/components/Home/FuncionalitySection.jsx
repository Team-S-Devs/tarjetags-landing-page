import React from 'react';
import { svgCode4 } from "../../utils/svgData";
import "../../styles/Home/FuncionalityPage.css";

const createSvgImage = (svgCode) => `data:image/svg+xml;base64,${btoa(svgCode)}`;

const imgSrc2 = createSvgImage(svgCode4);

const FuncionalitySection = ({ title, imgSrc, altText, description }) => {
  return (
    <div className="fun-section">
      <div className='fun-container'>
        <div className='icon'>
          <div className='icon-center'>
            <img className="first-image" src={imgSrc} alt={altText} />
            <img className='icon-background' src={imgSrc2} alt="Descripción de la imagen" />
          </div>
        </div>
        <div className='text-section'>
          <h6 className='title-text'>{title}</h6>
          <div className='subtext-text'>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default FuncionalitySection;
