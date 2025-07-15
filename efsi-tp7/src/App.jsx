import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/efsi-tp7">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="QuienesSomos" element={<QuienesSomos />} />
          
          {/* Rutas de productos */}
          <Route path="Productos" element={<Productos />} />
          <Route path="Productos/categoria/:category" element={<Productos />} />
          <Route path="Productos/:id" element={<ProductoDetalle />} />
          
          <Route path="Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App