import { useState, useEffect, useRef } from 'react';
import { useCarrito } from '../context/CarritoContext';
import './CarritoWidget.css';

const CarritoWidget = () => {
  const { 
    carrito, 
    eliminarDelCarrito, 
    vaciarCarrito, 
    obtenerTotal,
    incrementarCantidad,
    decrementarCantidad,
    obtenerCantidadTotal
  } = useCarrito();
  const [abierto, setAbierto] = useState(false);
  const carritoRef = useRef(null);

  const totalItems = obtenerCantidadTotal();

  // Cerrar carrito cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carritoRef.current && !carritoRef.current.contains(event.target)) {
        setAbierto(false);
      }
    };

    if (abierto) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [abierto]);

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD'
    }).format(precio);
  };

  return (
    <div className="carrito-widget" ref={carritoRef}>
      <button className="carrito-icono" onClick={() => setAbierto(!abierto)}>
        🛒 ({totalItems})
      </button>

      {abierto && (
        <div className="carrito-dropdown">
          {carrito.length === 0 ? (
            <div className="carrito-vacio">
              <p>El carrito está vacío</p>
              <p>¡Agrega algunos productos!</p>
            </div>
          ) : (
            <>
              <div className="carrito-header">
                <h3>Tu Carrito</h3>
                <button 
                  className="cerrar-carrito" 
                  onClick={() => setAbierto(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="carrito-items">
                {carrito.map(item => (
                  <div key={item.id} className="carrito-item">
                    <div className="item-info">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="item-thumbnail"
                      />
                      <div className="item-details">
                        <h4 className="item-title">{item.title}</h4>
                        <p className="item-price">{formatearPrecio(item.price)}</p>
                      </div>
                    </div>
                    
                    <div className="item-controls">
                      <div className="cantidad-controls">
                        <button 
                          onClick={() => decrementarCantidad(item.id)}
                          className="btn-cantidad"
                        >
                          -
                        </button>
                        <span className="cantidad">{item.quantity}</span>
                        <button 
                          onClick={() => incrementarCantidad(item.id)}
                          className="btn-cantidad"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="item-subtotal">
                        {formatearPrecio(item.price * item.quantity)}
                      </div>
                      
                      <button 
                        onClick={() => eliminarDelCarrito(item.id)}
                        className="btn-eliminar"
                        title="Eliminar del carrito"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="carrito-footer">
                <div className="carrito-total">
                  <strong>Total: {formatearPrecio(obtenerTotal())}</strong>
                </div>
                <div className="carrito-acciones">
                  <button 
                    onClick={vaciarCarrito}
                    className="btn-vaciar"
                  >
                    Vaciar carrito
                  </button>
                  <button 
                    className="btn-checkout"
                    onClick={() => {
                      alert('¡Funcionalidad de checkout próximamente!');
                      setAbierto(false);
                    }}
                  >
                    Finalizar compra
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CarritoWidget;
