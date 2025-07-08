import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow-1 bg-light py-4">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
