import React from 'react';
import '../../styles/Prices/BannerTittle.css';
import { BsTrophy } from "react-icons/bs";
import { BsInboxes } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import imagenplanes from "../../assets/imgPlans.svg";

const MiComponente = () => {

  return (
    <div className='background'>
        <div className='images-container'>
        <img src={imagenplanes} alt="img-plans" className="img-plans" draggable="false"></img>
          </div>
        <div className='text-container'>  
          <h2>PLANES PRECIOS</h2>
          <h3>Elige tu plan y comienza a crecer</h3>
          <div className='benefits-container'>
            <div className='benefits'>
              <BsInboxes className='icon'/>
              <h4>Planes a tu medida</h4>
            </div>
            <div className='benefits'>
              <BsUiChecksGrid className='icon'/>
              <h4>Amplia tus servicios</h4>
            </div>
            <div className='benefits'>
              <BsTrophy className='icon'/>
              <h4>Impulsa tu alcance</h4>
            </div> 
          </div>
        </div>
    </div>
  );
};

export default MiComponente;
