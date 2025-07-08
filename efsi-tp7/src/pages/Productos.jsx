import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from '../components/CardProducto';

const Productos = () => {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const url = idCategoria
      ? `https://dummyjson.com/products/category/${idCategoria}`
      : `https://dummyjson.com/products`;

    fetch(url)
      .then(res => res.json())
      .then(data => setProductos(data.products));
  }, [idCategoria]);

  return (
    <section style={{ padding: '2rem' }}>
      <h1>{idCategoria ? `Categoría: ${idCategoria}` : 'Todos los productos'}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {productos.map(prod => (
          <CardProducto key={prod.id} producto={prod} />
        ))}
      </div>
    </section>
  );
};

export default Productos;