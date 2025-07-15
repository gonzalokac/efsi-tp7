import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from '../components/CardProducto';

const Productos = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        let url = 'https://dummyjson.com/products';
        if (category) {
          url = `https://dummyjson.com/products/category/${category}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setProductos(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [category]);

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
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