import Cover from "../components/Home/Cover";
import FuncionalityPage from "../components/Home/FuncionalityPage";
import TimeLineSteps from "../components/Home/TimeLineSteps";
import "../styles/Home/Home.css";

const Home = () => {

  return (
    <>
      <div className="home-page">
        <Cover />
        <FuncionalityPage />
        <TimeLineSteps />
      </div>
    </>
  );
};

export default Home;