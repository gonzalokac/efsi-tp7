import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredCategories = [
    { name: 'Smartphones', path: '/Productos/categoria/smartphones', icon: '📱' },
    { name: 'Laptops', path: '/Productos/categoria/laptops', icon: '💻' },
    { name: 'Fragrances', path: '/Productos/categoria/fragrances', icon: '🌸' },
    { name: 'Skincare', path: '/Productos/categoria/skincare', icon: '🧴' }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenido a <span className="brand-highlight">CositasOnline</span>
          </h1>
          <p className="hero-subtitle">
            La mejor tecnología y productos al alcance de tu mano
          </p>
          <div className="hero-buttons">
            <Link to="/Productos" className="btn btn-primary">
              Ver todos los productos
            </Link>
            <Link to="/QuienesSomos" className="btn btn-secondary">
              Conocenos
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://dummyimage.com/600x400/007bff/ffffff&text=CositasOnline"
            alt="Banner principal"
            className="hero-banner"
          />
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="featured-categories">
        <h2 className="section-title">Categorías Destacadas</h2>
        <div className="categories-grid">
          {featuredCategories.map((category) => (
            <Link 
              key={category.path} 
              to={category.path} 
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">
                Explora nuestra selección de {category.name.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Información Adicional */}
      <section className="info-section">
        <div className="info-content">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Envío rápido</h3>
              <p>Recibe tus productos en tiempo récord</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Garantía total</h3>
              <p>Productos con garantía de calidad</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💳</div>
              <h3>Pagos seguros</h3>
              <p>Múltiples opciones de pago</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;