import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardProducto.css';
import { useCarrito } from '../context/CarritoContext';

const CardProducto = ({ producto }) => {
  const { agregarAlCarrito, estaEnCarrito } = useCarrito();
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
  const enCarrito = estaEnCarrito(producto.id);

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD'
    }).format(precio);
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto);
    setMostrarNotificacion(true);
    
    // Ocultar notificación después de 2 segundos
    setTimeout(() => {
      setMostrarNotificacion(false);
    }, 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={producto.thumbnail} alt={producto.title} />
        {enCarrito && (
          <div className="en-carrito-badge">
            ✓ En carrito
          </div>
        )}
        {mostrarNotificacion && (
          <div className="notificacion-agregado">
            ¡Agregado al carrito!
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{producto.title}</h3>
        <p className="product-price">{formatearPrecio(producto.price)}</p>
        <div className="product-buttons">
          <Link to={`/Productos/${producto.id}`} className="product-button ver-detalles">
            Ver detalles
          </Link>
          <button 
            className={`product-button agregar ${enCarrito ? 'en-carrito' : ''}`}
            onClick={handleAgregarAlCarrito}
            disabled={enCarrito}
          >
            {enCarrito ? '✓ Agregado' : '🛒 Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
