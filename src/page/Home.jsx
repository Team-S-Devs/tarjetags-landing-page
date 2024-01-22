import Advantages from "../components/Home/Advantages";
import { Comments } from "../components/Home/Comments";
import Cover from "../components/Home/Cover";
import MainFunctions from "../components/Home/MainFunctions";
import TimeLineSteps from "../components/Home/TimeLineSteps";
import "../styles/Home/Home.css";

const Home = () => {

  return (
    <>
      <div className="home-page">
        <Cover />
        <TimeLineSteps />
        <Advantages />
      </div>
    </>
  );
};

export default Home;