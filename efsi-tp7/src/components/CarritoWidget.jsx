import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import './CarritoWidget.css';

const CarritoWidget = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito, obtenerTotal } = useCarrito();
  const [abierto, setAbierto] = useState(false);

  const totalItems = carrito.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="carrito-widget">
      <button className="carrito-icono" onClick={() => setAbierto(!abierto)}>
        🛒 ({totalItems})
      </button>

      {abierto && (
        <div className="carrito-dropdown">
          {carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {carrito.map(item => (
                  <li key={item.id}>
                    {item.title} x{item.quantity} - ${item.price * item.quantity}
                    <button onClick={() => eliminarDelCarrito(item.id)}>❌</button>
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ${obtenerTotal()}</p>
              <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CarritoWidget;
