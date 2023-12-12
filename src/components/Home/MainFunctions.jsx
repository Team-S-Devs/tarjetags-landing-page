import "../../styles/Home/MainFunctions.css";

const MainFunctions = () => {
  return (
    <div className="main-functions-container">
      <h2 className="subtitle-functions">TARJETAS DE CONTACTO</h2>
      <img
        src="https://i.postimg.cc/x1Z70jC5/mobile.webp"
        alt=""
        className="mobile"
        draggable={false}
      />
      <div className="functionality-container left">
        <h3 className="functionality-name">Functionality name</h3>
        <p className="functionality-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae alias deserunt vitae blanditiis. Corrupti quae ullam sapiente qui voluptatem.
        </p>
      </div>
      <div className="functionality-container right">
        <h3 className="functionality-name">Functionality name</h3>
        <p className="functionality-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae alias deserunt vitae blanditiis. Corrupti quae ullam sapiente qui voluptatem.
        </p>
      </div>
      <div className="functionality-container left">
        <h3 className="functionality-name">Functionality name</h3>
        <p className="functionality-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae alias deserunt vitae blanditiis. Corrupti quae ullam sapiente qui voluptatem.
        </p>
      </div>
      <div className="functionality-container right">
        <h3 className="functionality-name">Functionality name</h3>
        <p className="functionality-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae alias deserunt vitae blanditiis. Corrupti quae ullam sapiente qui voluptatem.
        </p>
      </div>
    </div>
  );
}

export default MainFunctions