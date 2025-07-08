import { Link } from 'react-router-dom';

const CardProducto = ({ producto }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={producto.thumbnail}
        className="card-img-top"
        alt={producto.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text text-muted">${producto.price}</p>
        <Link to={`/Productos/${producto.id}`} className="btn btn-primary mt-auto">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default CardProducto;