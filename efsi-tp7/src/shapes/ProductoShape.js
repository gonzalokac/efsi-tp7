import PropTypes from 'prop-types';

// Shape para un producto individual
export const ProductoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number,
  rating: PropTypes.number,
  stock: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string)
});

// Shape para un item del carrito (producto + cantidad)
export const CarritoItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
});

// Shape para una categoría destacada
export const CategoriaShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
});
