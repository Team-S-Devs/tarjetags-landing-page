import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Faq from "./page/Faq";
import Plans from "./page/Plans";
import SignUp from "./page/SignUp"
import LogIn from "./page/LogIn";
import PropTypes from "prop-types";
import { Footer } from "./components/Footer/Footer";
import { SaFaBanner } from "./components/Footer/SaFaBanner";

function App() {

  const [isLoggedTheUser, setIsLoggedTheUser] = useState(false)

  return (
    <BrowserRouter>
      <HeaderWithLocation isLoggedTheUser={ isLoggedTheUser } />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
      <Footer />
      <SaFaBanner />
    </BrowserRouter>
  );
}

function HeaderWithLocation({ isLoggedTheUser }) {
  const location = useLocation();
  const [currentlyPage, setCurrentlyPage] = useState("");

  useEffect(() => {
    if (location.pathname === "/faq") {
      setCurrentlyPage("faq");
    } else if (location.pathname === "/plans") {
      setCurrentlyPage("plans")
    } else if (location.pathname === "/") {
      setCurrentlyPage("home")
    } else {
      setCurrentlyPage("")
    }
  }, [location]);

  return <Header currentlyPage={currentlyPage} isLoggedTheUser={ isLoggedTheUser } />;
}

HeaderWithLocation.propTypes = {
  isLoggedTheUser: PropTypes.bool.isRequired
}

export default App;
