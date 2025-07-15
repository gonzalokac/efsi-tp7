import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './layout.css';


const MainLayout = () => {
  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <Navbar />
      </header>

      <main className="layout-main">
        <div className="layout-container">
          <div className="layout-content">
            <Outlet />
          </div>
        </div>
      </main>

      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;