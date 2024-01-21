import React from 'react';
import ParallaxCard from "../../components/Home/MainFunctionalities";
import "../../styles/Home/fun.css";

const FuncionalityPage = () => {
  return (
    <div className="funcionality-page">
      {/* Primera sección con ParallaxCard */}
      <div className="parallax-section">
        <ParallaxCard />
      </div>

      {/* Segunda sección con el título "Funcionalidades Principales" */}
      <div className="title-section">
        <h2>Funcionalidades Principales</h2>
        {/* Agrega más contenido si es necesario */}
      </div>
    </div>
  );
};

export default FuncionalityPage;
