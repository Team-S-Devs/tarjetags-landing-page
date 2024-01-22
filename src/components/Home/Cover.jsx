import "../../styles/Home/Cover.css";
import Spline from "@splinetool/react-spline";

const Cover = () => {
  return (
    <div className="cover-container-background">
      <div className="cover-container">
        <div className="cover-sub-container left">
          <h1 className="slogan-cover">Conéctate de Forma Digital con Targetags</h1>
          <p className="paragraph-slogan-cover">Crea tarjetas de presentación irresistibles que te abran puertas y te conecten con oportunidades ilimitadas. Descubre la diferencia, conecta con Tarjetags hoy mismo.</p>
          <a href="/sign-up" className="sign-up-cover">
            Registrate
          </a>
        </div>
        <div className="cover-sub-container right">
          <Spline scene="https://prod.spline.design/JN0USfxoeS2AdOoT/scene.splinecode" className="spline-cover-one" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
