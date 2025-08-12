// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import CarritoWidget from './CarritoWidget';
import './Navbar.css';

const Navbar = () => {
  const categories = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration'
  ];

  const formatCategoryName = (category) =>
    category
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Marca */}
        <Link className="navbar-brand" to="/">
          CositasOnline
        </Link>

        {/* Menú */}
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/QuienesSomos" className="nav-link">Quiénes Somos</Link>
          </li>
          <li className="dropdown">
            <span className="nav-link dropdown-toggle">Productos</span>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/Productos">
                Ver todos los productos
              </Link>
              <div className="dropdown-divider"></div>
              {categories.map(category => (
                <Link
                  key={category}
                  className="dropdown-item"
                  to={`/Productos/categoria/${category}`}
                >
                  {formatCategoryName(category)}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/Contacto" className="nav-link">Contacto</Link>
          </li>
        </ul>

        {/* Carrito a la derecha */}
        <div className="navbar-cart">
          <CarritoWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
