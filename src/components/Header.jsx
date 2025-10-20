import { Link } from 'react-router-dom';
import { useCartStore, selectItemCount } from '../store/useCartStore';

function Header() {
  // Conexión con Zustand 
  
  const itemCount = useCartStore(selectItemCount);

  return (
    <header className="header">
      {/* Nombre de la Empresa */}
      <Link to="/" className="header-title">
        ⚙️ Ferrero Machines E-commerce
      </Link>

      {/* Navegación Principal */}
      <nav className="header-nav">
        <Link to="/" className="header-nav-link">
          Catálogo
        </Link>
        
        {/* Link al Carrito con Contador (Badge) */}
        <Link to="/cart" className="header-cart-link">
           Carrito 🛒
          {/* Muestra el contador solo si hay ítems */}
          {itemCount > 0 && <span className="header-cart-badge">{itemCount}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;