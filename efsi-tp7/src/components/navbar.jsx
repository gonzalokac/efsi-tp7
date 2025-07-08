import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
      const result = Array.isArray(data) ? data : data.categories;
     if (Array.isArray(result)) {
    setCategorias(result);
      } else {
       console.error("Formato de categorías inesperado:", data);
    setCategorias([]);
      }
    })

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
      <Link className="navbar-brand fw-bold text-uppercase" to="/">MiTienda</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/QuienesSomos">Quiénes Somos</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="productosDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>
            <ul className="dropdown-menu dropdown-menu-scroll" aria-labelledby="productosDropdown">
              <li>
                <Link className="dropdown-item fw-semibold" to="/Productos">Ver todos</Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              {categorias.map((cat, index) => (
                <li key={`cat-${index}`}>
                  <Link
                    className="dropdown-item text-capitalize"
                    to={`/Productos/categorias/${encodeURIComponent(cat)}`}
                  >
                    {cat.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;