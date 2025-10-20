import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <BrowserRouter>
      {/* El Header se renderiza en todas las páginas, fuera de <Routes> */}
      <Header />
      <main className="container mx-auto p-4"> 
        
        <Routes>
          {/* 1. Ruta principal: Listado de Productos */}
          <Route path="/" element={<ProductList />} />
          
          {/* 2. Ruta del Carrito de Compras */}
          <Route path="/cart" element={<ShoppingCart />} />
          
          {/* 3. Ruta de Confirmación de Pago */}
          {/* Uso 'replace' para evitar que el usuario pueda volver al carrito después de pagar */}
          <Route path="/thank-you" element={<ThankYouPage />} replace />
          
          {/* 4. Ruta 404 para URLs no encontradas */}
          <Route path="*" element={<h1>404: Página no encontrada</h1>} /> 
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;