import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';

function App() {
  return (
     <BrowserRouter basename="/efsi-tp7">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="QuienesSomos" element={<QuienesSomos />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="Productos/:id" element={<ProductoDetalle />} />
          <Route path="Productos/categorias/:idCategoria" element={<Productos />} />
          <Route path="Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;