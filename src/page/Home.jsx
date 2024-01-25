import Advantages from "../components/Home/Advantages";
import Cover from "../components/Home/Cover";
import FuncionalityPage from "../components/Home/FuncionalityPage";
import TimeLineSteps from "../components/Home/TimeLineSteps";
import BenefitsFunction from "../components/Home/BenefitsFunction";
import "../styles/Home/Home.css";

const Home = () => {

  return (
    <>
    <div className="home-page">
        <Cover />
        <FuncionalityPage />
        <BenefitsFunction />
        <TimeLineSteps />
        <Advantages />
      </div>
    </>
  );
};

export default Home;