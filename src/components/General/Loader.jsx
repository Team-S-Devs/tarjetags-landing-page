import "../../styles/Loader.css";
import PropTypes from 'prop-types'

const Loader = ({isLoading}) => {

  console.log(isLoading)

  return (
    <div className={`loader-container ${isLoading ? "loading-active" : ""}`}>
      <div className="loader"></div>
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Loader;
