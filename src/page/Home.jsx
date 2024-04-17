import Advantages from "../components/Home/Advantages";
import Cover from "../components/Home/Cover";
import FuncionalityPage from "../components/Home/FuncionalityPage";
import TimeLineSteps from "../components/Home/TimeLineSteps";
import BenefitsFunction from "../components/Home/BenefitsFunction";
import "../styles/Home/Home.css";
import { titleMain } from "../utils/constant";
import { Helmet } from "react-helmet";

const Home = () => {
  /* const [isUserLogged, setIsUserLogged] = useState(false); */
  /* 
    useEffect(() => {
        const handleAuthStateChange = () => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              setIsUserLogged(true);
            } else {
              setIsUserLogged(false);
            }
          });
        };
    
        handleAuthStateChange();
      }, []); */

  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>{titleMain}</title>
          <meta
            name="description"
            content="Crea tarjetas de presentación irresistibles que te abran puertas y
            te conecten con oportunidades ilimitadas."
          />
        </Helmet>
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
