import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from '../components/CardProducto';
import './Productos.css';

const Productos = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let url = 'https://dummyjson.com/products';
        if (category) {
          url = `https://dummyjson.com/products/category/${category}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProductos(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError('Error al cargar los productos. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [category]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          Intentar de nuevo
        </button>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="no-products">
        <h2>No se encontraron productos</h2>
        <p>No hay productos disponibles en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="productos-container">
      <h1 className="productos-title">
        {category ? `Productos: ${category.replace(/-/g, ' ')}` : 'Todos los productos'}
      </h1>
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Productos;