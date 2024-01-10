import { Comments } from "../components/Home/Comments";
import Cover from "../components/Home/Cover";
import MainFunctions from "../components/Home/MainFunctions";
import "../styles/Home/Home.css";

const Home = () => {

  return (
    <>
      <div className="home-page">
        <Cover />
        <MainFunctions />
        <div className="customize-container">
          <div className="customize-description-container">
            <h3 className="customize-title">PERSONALIZACIÓN</h3>
            <p className="customize-description">
              La función "Crear Tarjetas Personalizadas" te permite diseñar tarjetas digitales únicas. Con opciones para personalizar fondos, colores y contenido, expresar tu identidad nunca fue tan sencillo. Diseña de manera intuitiva y destaca con tarjetas que reflejen tu estilo y profesionalismo.
            </p>
          </div>
          <img
            src="https://i.postimg.cc/FFkqrfd6/Untitled-1-1920x979.png"
            alt="Customize image"
            className="designs-image"
            draggable={false}
          />
        </div>
        <Comments />
      </div>
    </>
  );
};

export default Home;