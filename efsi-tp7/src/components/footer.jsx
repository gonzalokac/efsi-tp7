import PropTypes from 'prop-types';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025  CositasOnline - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

// Footer no recibe props, pero documentamos que no requiere ninguna
Footer.propTypes = {};

export default Footer;