import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Cargando CositasOnline...</p>
      </div>
    </div>
  );
};

// LoadingSpinner no recibe props, pero documentamos que no requiere ninguna
LoadingSpinner.propTypes = {};

export default LoadingSpinner;
