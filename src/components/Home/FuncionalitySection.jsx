import React from 'react';

const FuncionalitySection = ({ title, imgSrc, altText, description }) => {
  return (
    <div className="fun-section">
      <div className='fun-container'>
        <div className='icon'>
          <div className='icon-center'>
            <img className="first-image" src={imgSrc} alt={altText} />
            <img src="https://i.ibb.co/6FhS3Wd/Ellipse-62-removebg-preview.png" alt="Descripción de la imagen" />
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
