import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <img src={producto.thumbnail} alt={producto.title} />
      <br />
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductoDetalle;