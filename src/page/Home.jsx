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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              aliquid dolore nobis asperiores ducimus, consequatur omnis sequi
              vel officia quos
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