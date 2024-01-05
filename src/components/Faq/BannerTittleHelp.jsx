import React from 'react';
import '../../styles/Prices/BannerTittle.css';

const BannerHelp = () => {
  return (
    <div className='background'>
        <div className='text-container'>  
          <h3>Centro de ayuda</h3>
          <h2>¿En que podemos ayudarlo?</h2>
          <div className='benefits-container'>
          <div className='benefits'>
            <h4>Aquí encontrará las respuestas, las funciones más valoradas y soporte</h4>
          </div>
          </div>
        </div>
        <div className='images-container'>
        <img src="https://i.postimg.cc/FFkqrfd6/Untitled-1-1920x979.png" alt="img-plans" className="img-plans" draggable="false"></img>
        </div>
    </div>
  );
};

export default BannerHelp;
