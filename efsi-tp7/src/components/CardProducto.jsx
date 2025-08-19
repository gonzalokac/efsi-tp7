import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardProducto.css';
import { useCarrito } from '../context/CarritoContext';

const CardProducto = ({ producto }) => {
  const { agregarAlCarrito, estaEnCarrito } = useCarrito();
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
  const [error, setError] = useState(null);
  
  // Validar que el producto tenga las propiedades necesarias
  if (!producto || !producto.id || !producto.title || !producto.price) {
    console.error('Producto inválido:', producto);
    return null;
  }

  const enCarrito = estaEnCarrito(producto.id);

  const formatearPrecio = (precio) => {
    try {
      return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'USD'
      }).format(precio);
    } catch (error) {
      console.error('Error formateando precio:', error);
      return `$${precio}`;
    }
  };

  const handleAgregarAlCarrito = () => {
    try {
      agregarAlCarrito(producto);
      setMostrarNotificacion(true);
      setError(null);
      
      // Ocultar notificación después de 2 segundos
      setTimeout(() => {
        setMostrarNotificacion(false);
      }, 2000);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      setError('Error al agregar al carrito');
      
      // Ocultar error después de 3 segundos
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={producto.thumbnail || 'https://dummyimage.com/300x200/ccc/999&text=Sin+imagen'} 
          alt={producto.title} 
          onError={(e) => {
            e.target.src = 'https://dummyimage.com/300x200/ccc/999&text=Sin+imagen';
          }}
        />
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
        {error && (
          <div className="notificacion-error">
            {error}
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
