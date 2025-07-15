import { Link } from 'react-router-dom';
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

  const formatCategoryName = (category) => {
    return category
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">CositasOnline</Link>
        
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/QuienesSomos">Quiénes Somos</Link>
            </li>
            
            
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">Productos</span>
              
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/Productos">
                  Ver todos los productos
                </Link>
                <div className="dropdown-divider"></div>
                
                {categories.map((category) => (
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
            
            <li className="nav-item">
              <Link className="nav-link" to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
