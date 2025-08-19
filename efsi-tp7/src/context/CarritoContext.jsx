import { createContext, useContext, useEffect, useState } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    try {
      const guardado = localStorage.getItem('carrito');
      return guardado ? JSON.parse(guardado) : [];
    } catch (error) {
      console.error('Error al cargar el carrito:', error);
      return [];
    }
  });

  // Persistir carrito en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } catch (error) {
      console.error('Error al guardar el carrito:', error);
    }
  }, [carrito]);

  // Validar que el producto tenga las propiedades necesarias
  const validarProducto = (producto) => {
    return producto && 
           typeof producto.id !== 'undefined' && 
           typeof producto.title !== 'undefined' && 
           typeof producto.price !== 'undefined' &&
           producto.price > 0;
  };

  const agregarAlCarrito = (producto) => {
    if (!validarProducto(producto)) {
      console.error('Producto inválido:', producto);
      return;
    }

    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...producto, quantity: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }

    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: nuevaCantidad } : item
      )
    );
  };

  const incrementarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity <= 1) {
            return null; // Se eliminará en el filter
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(Boolean) // Eliminar items null
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const obtenerTotal = () => {
    return carrito.reduce(
      (total, item) => {
        const precio = parseFloat(item.price) || 0;
        const cantidad = parseInt(item.quantity) || 0;
        return total + (precio * cantidad);
      },
      0
    );
  };

  const obtenerCantidadTotal = () => {
    return carrito.reduce((total, item) => total + (parseInt(item.quantity) || 0), 0);
  };

  const estaEnCarrito = (id) => {
    return carrito.some(item => item.id === id);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito,
        obtenerTotal,
        obtenerCantidadTotal,
        estaEnCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};