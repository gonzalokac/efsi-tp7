import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

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
    </div>
  );
};

export default ProductoDetalle;