import { Link } from 'react-router-dom';
import './CardProducto.css';
import { useCarrito } from '../context/CarritoContext';

const CardProducto = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={producto.thumbnail} alt={producto.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{producto.title}</h3>
        <p className="product-price">${producto.price}</p>
        <Link to={`/Productos/${producto.id}`} className="product-button">
          Ver detalles
        </Link>
        <button className="product-button" onClick={() => agregarAlCarrito(producto)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardProducto;
