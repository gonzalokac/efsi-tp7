// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CarritoWidget from './CarritoWidget';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
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

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Marca */}
        <Link className="navbar-brand" to="/" onClick={closeDropdown}>
          CositasOnline
        </Link>

        {/* Menú */}
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="nav-link" onClick={closeDropdown}>Home</Link>
          </li>
          <li>
            <Link to="/QuienesSomos" className="nav-link" onClick={closeDropdown}>Quiénes Somos</Link>
          </li>
          <li className="dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown('productos')}
              onMouseEnter={() => setActiveDropdown('productos')}
            >
              Productos
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'productos' ? 'show' : ''}`}>
              <Link className="dropdown-item" to="/Productos" onClick={closeDropdown}>
                Ver todos los productos
              </Link>
              <div className="dropdown-divider"></div>
              {categories.map(category => (
                <Link
                  key={category}
                  className="dropdown-item"
                  to={`/Productos/categoria/${category}`}
                  onClick={closeDropdown}
                >
                  {formatCategoryName(category)}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/Contacto" className="nav-link" onClick={closeDropdown}>Contacto</Link>
          </li>
        </ul>

        {/* Carrito a la derecha */}
        <div className="navbar-cart">
          <CarritoWidget />
        </div>
      </div>
      
      {/* Overlay para cerrar dropdown al hacer clic fuera */}
      {activeDropdown && (
        <div className="dropdown-overlay" onClick={closeDropdown}></div>
      )}
    </nav>
  );
};

export default Navbar;
