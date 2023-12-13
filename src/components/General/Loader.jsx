import { useEffect, useState } from "react";
import { loadingDetector } from "../../utils/Loader";

import "../../styles/Loader.css";

const Loader = () => {

    const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
        setIsLoading(!isLoading)
    };

    const cleanupLoadEvent = loadingDetector(handleLoad);

    return () => {
      cleanupLoadEvent();
    };
  }, []);

  return (
    <div className={`loader-container ${!isLoading ? "loading-active" : ""}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
