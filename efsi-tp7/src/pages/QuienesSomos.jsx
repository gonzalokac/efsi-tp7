import PropTypes from 'prop-types';

const QuienesSomos = () => {
  return (
    <div className="py-5">
      <h1>¿Quiénes somos?</h1>
      <p className="lead">Somos un grupo de programadores enfocados en la experiencia del usuario y la innovación.</p>
      <p>Desde 2020 ofrecemos productos de calidad y atención personalizada.</p>
    </div>
  );
};

// QuienesSomos no recibe props, pero documentamos que no requiere ninguna
QuienesSomos.propTypes = {};

export default QuienesSomos;